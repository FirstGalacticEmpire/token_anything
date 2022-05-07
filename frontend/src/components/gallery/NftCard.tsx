import React from 'react';
import {NFT} from "../interfaces/NFT";
import {FC} from "react";
import styled from "styled-components";

import {useNavigate} from 'react-router-dom';


const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

interface Props {
    nft: NFT
    onImgLoad: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
    height?: number
}

//react functional component
const NftCard: FC<Props> = ({nft, onImgLoad, height}): JSX.Element => {
    const className = 'd-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4'


    const navigate = useNavigate();
    const navigateTo = (link: string) => {
        navigate(link);
    }


    return (
        < div className={className}>
            <div className="nft__item m-0">

                <div className='icontype'><i className="fa fa-bookmark"></i></div>


                <div className="author_list_pp">
                    <span>
                    {/*<span onClick={() => navigateTo(nft.author.)}>*/}
                    <img className="lazy"
                         src={'http://localhost:8080\\porto_4.jpg'}
                         alt=""/>
                    <i className="fa fa-check"></i>
                    </span>
                </div>
                <div className="nft__item_wrap" style={{height: `${height}px`}}>
                    <Outer>
                        <span>
                            <img onLoad={onImgLoad}
                                 src={'http://127.0.0.1:8080/porto_4.jpg'}
                                 className="lazy nft__item_preview"
                                 alt=""/>
                        </span>
                    </Outer>
                </div>

                <div className="nft__item_info">
                    {/*<span onClick={() => navigateTo(`${nft.id}`)}>*/}
                    <h4>{nft.name}</h4>
                    <div className="nft__item_price">
                        {nft.price} ETH
                        {/*{ nft.status === 'on_auction' &&*/}
                        {/*    <span>{nft.bid}/{nft.max_bid}</span>*/}
                        {/*}*/}
                    </div>
                    {/*</span>*/}

                    <div className="nft__item_action">
                        {/*<span*/}
                        {/*     onClick={() => navigateTo(`${nft.bid_link}/${nft.id}`)}>{nft.status === 'on_auction' ? 'Place a bid' : 'Buy Now'}*/}
                        {/*</span>*/}
                        <span>Buy Now</span>

                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i><span>50</span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default NftCard;