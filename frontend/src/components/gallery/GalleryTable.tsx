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

    // return (<>
    //          <Table dataSource={nftList} rowKey="id">
    //              <Column title="Name" dataIndex="name" render={(name: string, record: any, index: number) => (
    //                  <Link to={"/gallery/id/" + record.id}>{name}</Link>
    //              )} key="name"/>
    //              <Column title="Image" dataIndex="image" key="image"/>
    //              <Column title="ID" dataIndex="id" key="id"/>
    //              <Column
    //                  title="Author"
    //                  dataIndex="author"
    //                  key="author"
    //                  render={(author: Author) => (
    //                      <>
    //                          Name: {author.first_name} Author: {author.last_name}
    //                      </>
    //                  )}
    //              />
    //              <Column title="Price" dataIndex="price" key="price"/>
    //              <Column title="Year of production" dataIndex="year_of_production" key="year_of_production"/>
    //          </Table>
    //     </>
    // )
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