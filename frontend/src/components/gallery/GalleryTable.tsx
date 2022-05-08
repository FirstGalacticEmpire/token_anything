import React, {FC, useState} from "react";
import {NFT} from "../interfaces/NFT";
import {Table} from 'antd';
import NftCard from "./NftCard"
import {Author} from "../interfaces/Author";
import {Link} from "react-router-dom";


interface Props {
    nftList: Array<NFT>
}

const {Column} = Table;

const GalleryTable: FC<Props> = ({nftList}): JSX.Element => {

    const [height, setHeight] = useState(0);

    const onImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {

        if(height < event.currentTarget.offsetHeight) {
            setHeight(event.currentTarget.offsetHeight);
        }
    }

    return (
        <section className='container-fluid bg-gray'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center'>
                            <h2>Popular Items</h2>
                            <div className="small-border"></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                     {nftList && nftList.map( (nft, index) => (

                       // <NftCard nft={nft} key={index} onImgLoad={onImgLoad}/>
                        <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height}/>
                     ))}
                     {/*{ showLoadMore && nfts.length <= 20 &&*/}
                     {/*    <div className='col-lg-12'>*/}
                     {/*        <div className="spacer-single"></div>*/}
                     {/*        <span onClick={loadMore} className="btn-main lead m-auto">Load More</span>*/}
                    {/*    </div>*/}
                     {/*}*/}
                 </div>
            </div>
        </section>


    );

}
export default GalleryTable