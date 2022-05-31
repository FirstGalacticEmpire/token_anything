import React, {FC} from "react";
import {Button, Form, Input} from 'antd';
import {toast} from "react-toastify";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {useMutation} from "react-query";
import {useIsAuthenticated, useSignIn} from 'react-auth-kit'
import {useAPIClient} from "../api/ApiProvider";
import APIClient from "../api/ApiClient";
import {useNavigate} from "react-router-dom";

interface Props {

}

interface Forms {
    email: string
    password: string
    remember: boolean
}

const LoginForm: FC<Props> = (): JSX.Element => {
    const signIn = useSignIn()
    const apiClient = useAPIClient() as APIClient
    const isAuthenticated = useIsAuthenticated()

    const navigate = useNavigate()


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
                toast("Successful sign in")
                navigate("/");


            } else {
                toast("Failed to sign in")
                console.log("Failed to sign in")
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const onFinish: FC<Forms> = ({email, password, remember}) => {
        // mutation.mutate({email: email, password: password})
        mutation.mutate({email: "user@user.com", password: "user123"})
        return <></>
    };

    if (isAuthenticated()) {
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
                name="email"
                rules={[
                    {
                        // required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="E-mail"/>
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
                <br/>

                Or <span>register now!</span>
            </Form.Item>
        </Form>

    )
}
export default LoginForm