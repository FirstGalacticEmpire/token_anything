import React, {FC, memo, useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Clock from "./Clock";
import {carouselNew5} from './constants';
// @ts-ignore
import Slider from "react-slick";
import {NFT} from "../interfaces/NFT";
import {Link} from "react-router-dom";
// import * as selectors from '../../store/selectors';
// import { fetchNftsBreakdown } from "../../store/actions/thunks";
// import api from "../../core/api";

interface Props {
    nftList: Array<NFT>
}



const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const HotGallery: FC<Props> = ({nftList}): JSX.Element => {
    const [height, setHeight] = useState(0);

    return (
        (
            <div className='nft'>
                <Slider {...carouselNew5}>
                    {nftList && nftList.map((nft, index) => (
                        <div className='itm' key={index}>
                            <div className="d-item">
                                <div className="nft__item">
                                    <div className="nft__item_wrap" style={{height: `${height}px`}}>
                                        <Outer>
                                            <span>
                                                <img src={nft.image} className="lazy nft__item_preview"
                                                     alt=""/>
                                            </span>
                                        </Outer>
                                    </div>
                                    <div className="nft__item_info">
                                        <Link to={"/gallery/id/" + nft.id}>
                                            <h4>{nft.name}</h4>
                                        </Link>
                                        <div className="nft__item_price">
                                            {nft.price} ETH
                                        </div>
                                        {/*<div className="nft__item_action">*/}
                                        {/*    /!*<span onClick={() => window.open(nft.bid_link, "_self")}>Place a bid</span>*!/*/}
                                        {/*</div>*/}
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart"></i><span>{nft.year_of_production}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        ))
}
export default memo(HotGallery);


