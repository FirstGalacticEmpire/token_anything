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
                console.log(queriedNft)
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

    return (
        <div>
            {/*<GlobalStyles/>*/}

            <section className='container'>
                <div className='row mt-md-5 pt-md-4'>

                    <div className="col-md-6 text-center">
                        <img src={nft?.image} className="img-fluid img-rounded mb-sm-30" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="item_info">

                            <h2>{nft?.name}</h2>
                            <div className="item_info_counts">
                                <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                            </div>
                            <p>sample desc</p>

                            <h6>Creator</h6>
                            <div className="item_author">
                                <div className="author_list_pp">
                                        <span>
                                            <img className="lazy" src={nft?.author.image} alt=""/>
                                            <i className="fa fa-check"></i>
                                        </span>
                                </div>
                                <div className="author_list_info">
                                    <span>{nft?.author.first_name + " " + nft?.author.last_name}</span>
                                </div>
                            </div>

                            <div className="spacer-40"></div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
export default NftDetails