import {FC} from "react";
import {NFT} from "../interfaces/NFT";
import {Table} from 'antd';
import {Author} from "../interfaces/Author";
import {Link} from "react-router-dom";


interface Props {
    nftList: Array<NFT>
}

const {Column} = Table;

const GalleryTable: FC<Props> = ({nftList}): JSX.Element => {

    return (<>
             <Table dataSource={nftList} rowKey="id">
                 <Column title="Name" dataIndex="name" render={(name: string, record: any, index: number) => (
                     <Link to={"/gallery/id/" + record.id}>{name}</Link>
                 )} key="name"/>
                 <Column title="Image" dataIndex="image" key="image"/>
                 <Column title="ID" dataIndex="id" key="id"/>
                 <Column
                     title="Author"
                     dataIndex="author"
                     key="author"
                     render={(author: Author) => (
                         <>
                             Name: {author.first_name} Author: {author.last_name}
                         </>
                     )}
                 />
                 <Column title="Price" dataIndex="price" key="price"/>
                 <Column title="Year of production" dataIndex="year_of_production" key="year_of_production"/>
             </Table>
        </>
    )
}
export default GalleryTable