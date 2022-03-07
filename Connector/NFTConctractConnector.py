from web3 import Web3
from dotenv import load_dotenv
import os
import json

load_dotenv()
PRIVATE_KEY = os.getenv('PRIVATE_KEY')
PUBLIC_KEY = os.getenv('PUBLIC_KEY')
CONTRACT_ADDRESS = os.getenv('CONTRACT_ADDRESS')

URL = "https://eth-ropsten.alchemyapi.io/v2/mV8HgAI3T1z-x6MV_ITODwwAZLatt1cw"
web3 = Web3(Web3.HTTPProvider(URL))

with open("./artifacts/contracts/MyNFT.sol/MyNFT.json", 'r') as out_file:
    contract_artifact = json.load(out_file)


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


if __name__ == "__main__":
    pass
# NFTContractConnector = NFTContractConnector()
# userNFTConnector = UserNFTConnector(None)
# print(userNFTConnector.getAddressTokens(PUBLIC_KEY))
