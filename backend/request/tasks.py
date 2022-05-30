import logging
from typing import List, Optional
from unittest.mock import Mock

from authentication.models.UserWallet import UserWallet
from nft.models.NftModel import NftModel
from physical_nft_creator.celery import app
from request.dtos.WebToken import WebToken
from request.models.RequestModel import RequestModel
from request.utils import JobState

logger = logging.getLogger(__name__)


def _get_balance(address, amount):
    if address:
        return float('inf')


def _create_token(request: RequestModel) -> Optional[WebToken]:
    if request.price > 0:
        return WebToken(
            transaction_address='0x8d4b40C9e7ef8fafA0E4E857Ea53aF32CbfE52Fc',
            wallet_address=request.user.wallet.address,
            contract_address='0x8d4b40C9e7ef8fafA0E4E857Ea53aF32CbfE52Fc'
        )
    else:
        return None


CONNECTOR = Mock(
    get_balance=Mock(side_effect=_get_balance),
    create_token=Mock(side_effect=_create_token)
)


def check_paid(job: RequestModel) -> bool:
    user_wallet: UserWallet = job.user.wallet
    actual_balance: float = CONNECTOR.get_balance(user_wallet.address, job.price)
    if actual_balance >= user_wallet.last_state + job.price:
        logger.info(f"Request with Id: {job.id} is paid.")
        return True
    return False


def _convert_dto_to_nft(web_token: WebToken, request: RequestModel) -> NftModel:
    return NftModel(
        name=request.name,
        year_of_production=2022,
        price=float(request.price),
        description=request.info,
        image=request.image,
        transaction_address=web_token.transaction_address,
        wallet_address=web_token.wallet_address,
        contract_address=web_token.contract_address,
        user=request.user,
    )


@app.task(bind=True)
def execute(self):
    no_paid_requests: List[RequestModel] = RequestModel.objects.filter(status='NEW', paid=False).all()
    print(f"New requests no paid: {len(no_paid_requests)}")
    logger.info(f"New requests no paid: {len(no_paid_requests)}")
    for request in no_paid_requests:
        request.paid = check_paid(request)
        request.save()

    new_requests: List[RequestModel] = RequestModel.objects.filter(status='NEW', paid=True).all()
    for request in new_requests:
        request.status = JobState.PROCESS
        web_token = CONNECTOR.create_token(request)
        if web_token:
            logger.info(f"Request with Id: {request.id} was created successfully.")
            nft_model = _convert_dto_to_nft(web_token, request)
            print(nft_model)
            nft_model.save()
            request.status = JobState.FINISHED
        request.save()
    print("Use case completed successfully!")