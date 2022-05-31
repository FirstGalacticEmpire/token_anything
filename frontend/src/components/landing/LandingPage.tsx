import React, {FC, useState} from "react";
import Carousel from "./Carousel"
import Main from "./Main"
import {NFT} from "../interfaces/NFT";
import {useQuery} from "react-query";
import apiClient from "../../api/ApiClient";
import {toast} from "react-toastify";
import {ApiContextType, useAPIClient} from "../../api/ApiProvider";

interface Props {
    message?: string
}

const LandingPage: FC<Props> = ({message}): JSX.Element => {

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
            retry: false
        })

    return (<>
        <section className="jumbotron no-bg bg-gray">
            <Main/>
        </section>

        <section className='pb60 greybg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2>New Items</h2>
                    </div>
                    <div className='col-lg-12'>
                        <Carousel nftList={nftList}/>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default LandingPage