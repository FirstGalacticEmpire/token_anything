import React, {FC} from "react";
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
} from 'antd';
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";

interface Props {

}

interface Forms {
    username: string
    password: string
    email: string
    first_name: string
    last_name: string
}

const RegisterForm: FC<Props> = (): JSX.Element => {

    const onFinish: FC<Forms> = ({username, password, email, first_name, last_name}) => {
        console.log('Received values of form: ', username, password, email, first_name, last_name);
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
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="E-mail"/>
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
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                {/*<Input.Password prefix={<MailOutlined  className="site-form-item-icon"/>} placeholder="E-mail" />*/}
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Confirm Password"
                />
            </Form.Item>


            <Form.Item
                name="first_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your First Name!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="First Name"/>
            </Form.Item>

            <Form.Item
                name="last_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Last Name!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Last Name"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
            </Form.Item>
        </Form>

    )
}
export default RegisterForm