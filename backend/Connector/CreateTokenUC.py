from web3 import Web3

from request.models.RequestModel import RequestModel

URL = "https://eth-ropsten.alchemyapi.io/v2/mV8HgAI3T1z-x6MV_ITODwwAZLatt1cw"


class CreateTokenUC:
    def __init__(self):
        self._session: Web3 = None
        self._url: str = None

    @property
    def session(self) -> Web3:
        return self._session

    def connect_by_url(self, url_address: str) -> None:
        if not self._url:
            self._url = url_address
        try:
            session = Web3(Web3.HTTPProvider(url_address))
            self._session = session
        except ConnectionError:
            raise ConnectionError(f"Unable ot connect with given URL: {url_address}")

    def create_token(self,request: RequestModel):



