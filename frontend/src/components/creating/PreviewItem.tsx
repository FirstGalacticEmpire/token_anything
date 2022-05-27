import React, {FC} from 'react';

interface Props{
    image: string
    title: string
}

const PreviewItem: FC<Props> = (props) =>{


    return <>
        <h5>Preview item</h5>
        <div className="nft__item m-0">

            <div className="nft__item_wrap">
                          <span>
                              <img className="lazy"
                                   src={(typeof props.image === 'string' && props.image !== '') ? props.image : './img/sample.png'}
                                   alt=""/>
                          </span>
            </div>
            <div className="nft__item_info">
                          <span>
                              <h4>{props.title.length > 0 ? props.title : 'Random name'}</h4>
                          </span>
                <div className="nft__item_price">
                    0.00 ETH
                </div>

                <div className="nft__item_like">
                    <i className="fa fa-heart"></i><span>50</span>
                </div>
            </div>
        </div>
    </>
}
export default PreviewItem;