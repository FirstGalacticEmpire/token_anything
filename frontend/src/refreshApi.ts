import axios from 'axios'
import {useAuthHeader, createRefresh} from 'react-auth-kit'
import {createRefreshParamInterface} from "react-auth-kit/dist/types";


const refreshApi = createRefresh({
    interval: 1,   // Refreshes the token in every 10 minutes
    refreshApiCallback: (
        {
            authToken,
            authTokenExpireAt,
            refreshToken,
            refreshTokenExpiresAt,
            authUserState
        }) => {
        axios.post('http://127.0.0.1:8000/login/refresh/',
            {refresh: refreshToken}
        ).then(({data})=>{
            console.error(data)
            return {
                isSuccess: true,  // For successful network request isSuccess is true
                newAuthToken: data.newAuthToken,
                newAuthTokenExpireIn: data.newAuthTokenExpireIn
                // You can also add new refresh token ad new user state
            }
        }).catch((e)=>{
            console.error(e)
            return{
                isSuccess:false // For unsuccessful network request isSuccess is false
            }
        })
    }
} as createRefreshParamInterface)

export default refreshApi