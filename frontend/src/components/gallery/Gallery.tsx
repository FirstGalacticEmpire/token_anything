import React, {FC} from "react";
import {useQuery} from "react-query";
import {toast} from 'react-toastify';
import apiClient from "../../api/ApiClient";
import {NFT} from "../interfaces/NFT";

interface Props {
    message?: string
}

const Gallery: FC<Props> = ({message}): JSX.Element => {

    useQuery('nftList',
        () => apiClient.nftList(), {
            onSuccess: (response) => {

                // nftList : Array<NFT> = []
                const nftList: Array<NFT> = response.data.results
                console.log(nftList[1].name)
                // setProblems(response.data)
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false
        })

    return (<>
        This is Gallery!
    </>)
}
export default Gallery