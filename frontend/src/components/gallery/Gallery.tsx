import React, {FC, useState} from "react";
import {useQuery} from "react-query";
import {toast} from 'react-toastify';
import {NFT} from "../interfaces/NFT";
import GalleryTable from "./GalleryTable";
import {Input, Radio} from "antd";

import {ApiContextType, useAPIClient} from "../../api/ApiProvider";


interface Props {
    message?: string
}

const Gallery: FC<Props> = ({message}): JSX.Element => {

    const [searchInput, setSearchInput] = useState("")
    const [nftList, setNFTList] = useState<Array<NFT>>([])

    const apiClient = useAPIClient() as ApiContextType
    const [standard, setStandard] = React.useState("");

    useQuery('nftList',
        apiClient.nftList, {
            onSuccess: (response) => {
                const nftList: Array<NFT> = response.data.results
                setNFTList(nftList)
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false,
        })

    const searchHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(value.target.value)
    }
    // @ts-ignore
    const handleClick = (event) => {
        console.log(event)
        if (event.target.value === standard) {
            setStandard("");
        } else {
            setStandard(event.target.value);
        }
    }

    return (<>
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
                </div>

                <div className='container'>
                    <div style={{display: 'inline-block'}}>

                        <Input style={{width: 200, margin: 15, position: "relative", right: -50}}
                               onChange={searchHandler} placeholder="input search text"></Input>

                        <Radio.Group value={standard} buttonStyle="solid" style={{margin: 15, position: "relative", right: -50}}>
                            <Radio.Button value="erc20" onClick={handleClick}>ERC-20</Radio.Button>
                            <Radio.Button value="erc721" onClick={handleClick}>ERC-721</Radio.Button>
                            <Radio.Button value="erc1155" onClick={handleClick}>ERC-1155</Radio.Button>
                        </Radio.Group>

                    </div>
                </div>


                <GalleryTable nftList={nftList} byAuthor={'dfaadf'} byName={searchInput} byStandard={standard}/>

            </section>
        </>
    )

}
export default Gallery