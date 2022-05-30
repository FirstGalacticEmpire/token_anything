from dataclasses import dataclass


@dataclass
class WebToken:
    transaction_address: str
    wallet_address: str
    contract_address: str
