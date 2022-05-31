import React, {FC, useState} from "react";
import {NFT} from "../interfaces/NFT";
import NftCard from "./NftCard"

interface Props {
    nftList: Array<NFT>
    byName: string
    byAuthor: string | undefined
    byStandard: string
}

const GalleryTable: FC<Props> = ({nftList, byName, byAuthor, byStandard}): JSX.Element => {
    const [height, setHeight] = useState(0);

    const onImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {

        if (height < event.currentTarget.offsetHeight) {
            setHeight(event.currentTarget.offsetHeight);
        }
    }

    return (
        <div className='row'>
            {/*//todo handling where nft.standard is null, happens when backend fails*/}
            {nftList.filter(nft => nft.name.includes(byName)).filter(nft => nft.standard.includes(byStandard)).map((nft, index) => (

                <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height}/>
            ))
            }

            {nftList.filter(nft => nft.author.first_name.includes(byAuthor !== undefined ? byAuthor: 'sadasd')).map((nft, index) => (

                <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height}/>
            ))
            }

        </div>
    );

}
export default GalleryTable