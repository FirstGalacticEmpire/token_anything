import {FC, useEffect} from "react";
import {useMetaMask} from "metamask-react";
import {Button} from "antd";
import {toast} from "react-toastify";


interface Props {
 wallet_address?: string
}

const MetaMask: FC<Props> = ({wallet_address}): JSX.Element => {
    const {status, connect, account, chainId, ethereum} = useMetaMask();


    const handleEnterLottery = async () => {
        const transactionParameters = {
            to: "0x51fE373b995aBB2F5696E3c4806dCb053f3bAB92",//ethereum.selectedAddress, //change here to wallet_address
            // Required except during contract publications.
            from: ethereum.selectedAddress, // must match user's active address. /
            value: '500000000000', // Only required to send ether to the recipient from the initiating external account.
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };
        const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).then((response: any) => {
            toast("Transaction was succesfuly sent")
            console.log("https://ropsten.etherscan.io/tx/" + response) //todo ether scan result
        }).catch((e: any) => {
            console.log(e)
            toast("You have rejected the transaction. Please try again")
        })


        // txHash.then((r: any) => {
        //     console.log(txHash)
        //
        // }).catch((e: any) => {
        //     // console.log(e)
        //     toast("You have rejected the transaction")
        // })
        // ethereum.
    }


    if (status === "unavailable") return (<div> To make transaction you need to connect to have metamask installed.
        Unfortunately metamask was not detected, download it here.
    </div>)

    if (status === "notConnected") return (
        <>To make transaction you need to connect to metamask.
            <button onClick={connect}>
                Connect to MetaMask
            </button>
        </>
    )

    if (status === "connecting") return (<div>
        Connecting in progress, please accept connection in your metamask wallet.
        Connecting... {status}
    </div>)

    // if (status === "initializing") return <div>Synchronisation with MetaMask ongoing... {status}</div>


    if (status === "connected") return (<>
            <div>Connected account {account} on chain ID {chainId} {status}</div>
            <Button onClick={handleEnterLottery}>Pay security</Button>
        </>
    )


    return (<>Metamask handler error. {() => {
        console.log("Metamask handler error.");
        toast("Metamask connector failure")
    }}</>)
}

export default MetaMask