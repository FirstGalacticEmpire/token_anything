import React, {FC} from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {useMutation, useQuery} from "react-query";
import apiClient from "../api/ApiClient";
import {useSignIn} from 'react-auth-kit'
import {useAuthUser, useSignOut} from 'react-auth-kit'
import {useAuthHeader} from 'react-auth-kit'
import {NFT} from "./interfaces/NFT";
import {toast} from "react-toastify";
import {ApiContextType, useAPIClient} from "../api/ApiProvider";


interface Props {

}


const Protected: FC<Props> = (): JSX.Element => {
    // const authUser = useAuthUser()
    // const apiClient = useAPIClient() as ApiContextType

    // useQuery(['nftsasdasd'],
    //     apiClient.nftList, {
    //         onSuccess: (response) => {
    //             const nftList: Array<NFT> = response.data.results
    //             toast("Success")
    //         },
    //         onError: (e: Error) => {
    //             toast("Failed loading your annotation jobs: " + e.message)
    //             console.log(e)
    //         },
    //         retry: false
    //     })

    return (<>Protected route</>)
    // const authUserValue = authUser()
    // if (authUserValue !== null) {
    //     return (<>{`Hello ${authUserValue.name}, your U-ID is: ${authUserValue.uid}`} <br/>
    //     </>)
    // } else {
    //     return (<>You are logged-out</>)
    // }

}
export default Protected