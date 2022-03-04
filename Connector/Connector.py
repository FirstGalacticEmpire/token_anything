from web3 import Web3
from dotenv import load_dotenv
import requests
import os

load_dotenv()
PRIVATE_KEY = os.getenv('PRIVATE_KEY')
PUBLIC_KEY = os.getenv('PUBLIC_KEY')
contractAddress = "0x10e8c9ddcc34168dd52eabe43b47f83bdc025d48"


class NFTContractConnector:
    def __init__(self, web3, contractAddress, contractAbi) -> None:
        super().__init__()
        self.web3 = web3
        self.contractAddress = contractAddress
        self.contractAbi = contractAbi
        try:
            self.contract = web3.eth.contract(abi=self.contractAbi,
                                              address=Web3.toChecksumAddress(self.contractAddress))
        except Exception as e:
            print("Error while initializing the contract occurred.")
            print(e)

    def getContractOwnerPublicAddress(self):
        return self.contract.functions.owner().call()

    def getTokenOwnerByTokenId(self, tokenId):
        assert isinstance(tokenId, int)
        return self.contract.functions.ownerOf().call()

    def getTokenUriByTokenId(self, tokenId):
        assert isinstance(tokenId, int)
        return self.contract.functions.tokenURI(tokenId).call()

    # todo add error handling!!!
    def mintNFTToken(self, forWho, tokenUri):
        nonce = self.web3.eth.getTransactionCount(forWho, "latest")
        transaction = self.contract.functions.mintNFT(forWho, tokenUri).buildTransaction({
            "from": forWho,
            "nonce": nonce,
            "gas": 0,
        })
        signed_tx = self.web3.eth.account.sign_transaction(transaction, PRIVATE_KEY)
        try:
            txn_hash = self.web3.eth.send_raw_transaction(signed_tx.rawTransaction)
            print(str(txn_hash))
        except ValueError as e:
            print(e)

    # todo transfer token


class UserNFTConnector:
    def __init__(self, web3) -> None:
        super().__init__()
        self.web3 = web3

    def getAddressTokens(self, publicAddress, contractAdresses=None):
        """
        Returns tokens owned by address
        :param publicAddress: address of account for which token should be queried
        :param contractAdresses:  array of contract addresses to filter the responses with. Max limit 20 contracts.
        :return: token owned by an address
        """
        if contractAdresses is None:
            params = {
                'owner': publicAddress
            }
        else:
            assert isinstance(contractAdresses, list)
            assert len(contractAdresses) <= 20
            params = {
                'owner': publicAddress,
                'contractAddresses': contractAdresses
            }
        response = requests.get('https://eth-ropsten.alchemyapi.io/v2/demo/getNFTs/', params=params)
        if response.status_code == 200:
            return response.json()
        else:
            print("Error while querying user data")
            raise Exception


if __name__ == "__main__":
    # NFTContractConnector = NFTContractConnector()
    userNFTConnector = UserNFTConnector(None)
    print(userNFTConnector.getAddressTokens(PUBLIC_KEY))
