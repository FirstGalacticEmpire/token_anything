import {FC, useState} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import apiClient from "../../api/ApiClient";
import {NFT} from "../interfaces/NFT";
import {toast} from "react-toastify";

interface Props {
    message?: string
}

const NftDetails: FC<Props> = ({message}): JSX.Element => {
    const {nftId} = useParams();
    const [nft, setNft] = useState<NFT | null>(null)

    useQuery(['nftDetails', nftId],
        apiClient.getNftDetails, {
            onSuccess: (response) => {
                const queriedNft: NFT = response.data
                setNft(queriedNft)
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false,
            // Queries only after nftId is known
            enabled: !!nftId,
        })

    return (<>Your are reading details of: {nftId} Name: {nft?.name}</>)
}
export default NftDetails