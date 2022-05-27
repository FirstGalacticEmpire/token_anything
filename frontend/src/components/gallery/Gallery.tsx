import React, {FC, useState} from "react";
import {useQuery} from "react-query";
import {toast} from 'react-toastify';
import {NFT} from "../interfaces/NFT";
import GalleryTable from "./GalleryTable";

import {ApiContextType, useAPIClient} from "../../api/ApiProvider";


interface Props {
    message?: string
}

const Gallery: FC<Props> = ({message}): JSX.Element => {
    const [nftList, setNFTList] = useState<Array<NFT>>([])
    const apiClient = useAPIClient() as ApiContextType

    useQuery('nftList',
        apiClient.nftList, {
            onSuccess: (response) => {
                const nftList: Array<NFT> = response.data.results
                setNFTList(nftList)
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false,
            // enabled: !!apiClient
        })

    return (<>
        {/*This is Gallery!*/}
        <GalleryTable nftList={nftList}/>
    </>)

}
export default Gallery