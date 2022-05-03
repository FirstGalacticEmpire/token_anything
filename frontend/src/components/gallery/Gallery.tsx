import React, {FC, useState} from "react";
import {useQuery} from "react-query";
import {toast} from 'react-toastify';
import apiClient from "../../api/ApiClient";
import {NFT} from "../interfaces/NFT";
import GalleryTable from "./GalleryTable";

interface Props {
    message?: string
}

const Gallery: FC<Props> = ({message}): JSX.Element => {
    const [nftList, setNFTList] = useState<Array<NFT>>([])
    useQuery('nftList',
        () => apiClient.nftList(), {
            onSuccess: (response) => {
                const nftList: Array<NFT> = response.data.results
                setNFTList(nftList)
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false
        })

    return (<>
        This is Gallery!
        <GalleryTable nftList={nftList}/>
    </>)
}
export default Gallery