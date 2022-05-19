import React, {FC} from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

interface Props {

}

interface Forms {
    username: string
    password: string
    remember: boolean
}

const LoginForm: FC<Props> = (): JSX.Element => {

    const onFinish: FC<Forms> = ({username, password, remember}) => {
        console.log('Received values of form: ', username);

        return <></>
    };

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
                        required: true,
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
                        required: true,
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

            {/*<Form.Item>*/}
            {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
            {/*        <Checkbox>Remember me</Checkbox>*/}
            {/*    </Form.Item>*/}

            {/*    <a className="login-form-forgot" href="">*/}
            {/*        Forgot password*/}
            {/*    </a>*/}
            {/*</Form.Item>*/}

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