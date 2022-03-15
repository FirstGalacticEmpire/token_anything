from web3 import Web3
from dotenv import load_dotenv
import requests
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
