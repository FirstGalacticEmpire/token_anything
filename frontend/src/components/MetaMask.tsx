import {FC, useEffect} from "react";
import {useMetaMask} from "metamask-react";
import {Button} from "antd";


interface Props {

}

const MetaMask: FC<Props> = (): JSX.Element => {

    const {status, connect, account, chainId, ethereum} = useMetaMask();


    const handleEnterLottery = async () => {
        console.log("XD")
        const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
            gas: '0x2710', // customizable by user during MetaMask confirmation.
            to: ethereum.selectedAddress, // Required except during contract publications.
            from: ethereum.selectedAddress, // must match user's active address.
            value: '0x00', // Only required to send ether to the recipient from the initiating external account.
            data:
                '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };
        const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        //todo handle user reject todo handling erros
        txHash.then((r: any) => {
            console.log(txHash)

        }).catch((e: any) => {
            console.log(e)
        })
        // ethereum.
    }

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available :(</div>

    if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

    if (status === "connecting") return <div>Connecting...</div>

    if (status === "connected") return <div>Connected account {account} on chain ID {chainId}

        <Button onClick={handleEnterLottery}>Enter Lottery</Button></div>


    return (<></>)
}
export default MetaMask