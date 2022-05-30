import React, {FC, useState} from "react";
import {NFT} from "../interfaces/NFT";
import Slider, {Settings} from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

interface Props {
    nftList: Array<NFT>
}

export const carouselNew: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
}

const Carousel: FC<Props> = ({nftList}): JSX.Element => {

    const [height, setHeight] = useState(0);

    const onImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {

        if (height < event.currentTarget.offsetHeight) {
            setHeight(event.currentTarget.offsetHeight);
        }
    }
    return (
        <div className='nft'>
            <Slider {...carouselNew}>
                {nftList && nftList.map((nft, index) => (

                    <div className='itm' key={index}>

                        <div className="d-item">

                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <Link to={"/author/id/" + nft.author.id}>
                                        <img className="lazy" src={nft.author.image} alt=""/>
                                        <i className="fa fa-check"> </i>
                                    </Link>

                                </div>

                                <div className="nft__item_wrap" style={{height: `${height}px`}}>

                                    <span>
                                        <img src={nft.image} className="lazy nft__item_preview" onLoad={onImgLoad} alt=""/>
                                    </span>

                                </div>
                                <div className="nft__item_info">
                                    <Link to={"/gallery/id/" + nft.id}>
                                        <h4>{nft.name}</h4>
                                    </Link>

                                    <div className="nft__item_price">
                                        {nft.price} ETH
                                    </div>
                                    <div className="nft__item_action">
                                        <span>Place a bid</span>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Carousel;