import React, {FC} from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {useMutation, useQuery} from "react-query";
import apiClient from "../api/ApiClient";
import {useSignIn} from 'react-auth-kit'
import { useAuthUser, useSignOut } from 'react-auth-kit'
import {useAuthHeader} from 'react-auth-kit'
import {NFT} from "./interfaces/NFT";
import {toast} from "react-toastify";
import {ApiContextType, useAPIClient} from "../api/ApiProvider";


interface Props {

}


const Protected: FC<Props> = (): JSX.Element => {
    const authUser = useAuthUser()
    const authHeader = useAuthHeader()
    const apiClient = useAPIClient() as ApiContextType

    useQuery(['nfts', authHeader()],
        apiClient.nftList, {
            onSuccess: (response) => {
                const nftList: Array<NFT> = response.data.results
                toast("Success")
            },
            onError: (e: Error) => {
                toast("Failed loading your annotation jobs: " + e.message)
                console.log(e)
            },
            retry: false
        })


    // console.log(authHeader())
    // @ts-ignore
    return (<>{`Hello ${authUser().name}, your U-ID is: ${authUser().uid}`} <br/>

        </>)
}
export default Protected