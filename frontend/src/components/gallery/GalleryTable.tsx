import React, {FC, useState} from "react";
import {NFT} from "../interfaces/NFT";
import NftCard from "./NftCard"

interface Props {
    nftList: Array<NFT>
    byName: string
    byAuthor: string
}

const GalleryTable: FC<Props> = ({nftList, byName, byAuthor}): JSX.Element => {

    const [height, setHeight] = useState(0);

    const onImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {

        if (height < event.currentTarget.offsetHeight) {
            setHeight(event.currentTarget.offsetHeight);
        }
    }

    return (
        <div className='row'>
            {nftList.filter(nft => nft.name.includes(byName)).map((nft, index) => (

                <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height}/>
            ))
            }

            {nftList.filter(nft => nft.author.first_name.includes(byAuthor)).map((nft, index) => (

                <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height}/>
            ))
            }

        </div>
    );

}
export default GalleryTable