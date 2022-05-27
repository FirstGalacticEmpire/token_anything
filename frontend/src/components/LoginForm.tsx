
import React, {FC, useEffect} from "react";
import {Form, Input, Button, Checkbox} from 'antd';

import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {useMutation} from "react-query";
import {useAuthUser, useIsAuthenticated, useSignIn} from 'react-auth-kit'
import {useAPIClient} from "../api/ApiProvider";
import APIClient from "../api/ApiClient";
import {useNavigate} from "react-router-dom";

interface Props {

}

interface Forms {
    username: string
    password: string
    remember: boolean
}

const LoginForm: FC<Props> = (): JSX.Element => {
    const signIn = useSignIn()
    const apiClient = useAPIClient() as APIClient
    const isAuthenticated = useIsAuthenticated()

    const navigate = useNavigate()
    // useEffect(() => {
    //     if (isAuthenticated()) {
    //         navigate("/")
    //     }
    // }, [isAuthenticated, navigate])

    const mutation = useMutation(apiClient.login, {
        onSuccess: (response) => {
            apiClient.setupLogin({
                access_token: response.data.tokens.access,
                refresh_token: response.data.tokens.refresh
            })
            console.log(response)
            if (signIn({
                token: response.data.tokens.access,
                expiresIn: 1000,
                tokenType: "Bearer",
                authState: {name: 'React User', uid: 123456}
                // authState: res.data.authUserState,
                // refreshToken: response.data.tokens.refresh,                    // Only if you are using refreshToken feature
                // refreshTokenExpireIn: 20
            })) {
                // console.log("signed in")
                // @ts-ignore

            } else {
                console.log("Failed to sign in")
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const onFinish: FC<Forms> = ({username, password, remember}) => {
        mutation.mutate({email: "root2@root.com", password: "rootroot"})
        // mutation.mutate({email: username, password: password})
        // console.log('Received values of form: ', username);
        return <></>
    };

    if (isAuthenticated()){
        return (<>You are already logged-in</>)
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        // required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        // required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                    // onChange={handleNameChange}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                {/*Or <a href="">register now!</a>*/}
            </Form.Item>
        </Form>

    )
}
export default LoginForm