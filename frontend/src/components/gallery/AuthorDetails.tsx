import React, {FC, useState} from "react";
import {useQuery} from "react-query";

import {Author} from "../interfaces/Author"

import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import GalleryTable from "./GalleryTable";
import {NFT} from "../interfaces/NFT";
import {ApiContextType, useAPIClient} from "../../api/ApiProvider";

interface Props {
    message?: string
}

const AuthorDetails: FC<Props> = ({message}): JSX.Element => {

    const {authorID} = useParams();
    const [nftList, setNFTList] = useState<Array<NFT>>([])
    const [author, setAuthor] = useState<Author | null>(null)
    const apiClient = useAPIClient() as ApiContextType

    useQuery('nftList2',
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

    useQuery(['authorDetails', authorID],
        apiClient.getAuthorDetails, {
            onSuccess: (response) => {
                const queriedAuthor: Author = response.data
                // console.log(queriedAuthor)
                setAuthor(queriedAuthor)
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false,
            enabled: !!authorID,
        })

    return (
        <>
            <section className='container no-bottom'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="d_profile de-flex">
                            <div className="de-flex-col">
                                <div className="profile_avatar">
                                    <img src={author?.image} alt=""/>
                                    <i className="fa fa-check"></i>
                                    <div className="profile_name">
                                        <h4>
                                            {author?.first_name + " " + author?.last_name}
                                            <span className="profile_username">socials</span>
                                            <span id="wallet" className="profile_wallet">walletId </span>
                                            <button id="btn_copy" title="Copy Text"> Copy</button>
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="de-flex-col">
                                <div className="profile_follower">{author?.about}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='container no-top'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="items_filter">
                            <ul className="de_nav text-left">
                                <span>My tokens:</span>
                            </ul>
                        </div>
                    </div>
                </div>
                <GalleryTable nftList={nftList} byAuthor={author?.first_name} byName={'dsafadf'} byStandard={''}/>

            </section>
        </>
    )
}
export default AuthorDetails