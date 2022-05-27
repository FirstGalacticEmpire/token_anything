import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import DragDrop from "./DragDrop";
import PreviewItem from "./PreviewItem";

interface Forms {
    title: string
    description: string

}

const CreateObject: FC<{}> = props => {
    const [image, setImage] = useState<string | ArrayBuffer | null | undefined>('');
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const navigate = useNavigate();

    const onFinish: FC<Forms> = ({title, description}) => {
        console.log('Received values of form: ', title, description, image);
        // setData({description: description, name: title})
        // console.log(name)
        if (image !== ''){
            navigate("/create-papers", {state: {name: name, description: description}});
        }else {
            toast("Please input image")
        }

        return < ></>
    }

    const handleNameChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setName(value.target.value)
    }
    const handleDescriptionChange = (value: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(value.target.value)
    }

    return (
        <>
            <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/subheader.jpg'})`}}>
                <div className='mainbreadcumb'>
                    <div className='container'>
                        <div className='row m-10-hor'>
                            <div className='col-12'>
                                <h1 className='text-center'>Create</h1>
                                <h3 className='text-center'>Give us photo, and we will price it</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>

                <div className="row">
                    <div className="col-lg-7 offset-lg-1 mb-5">
                        <Form
                            name="create-crypto"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <h5>Upload file</h5>
                            <Form.Item name="image">
                                <DragDrop setImage={setImage} image={image}></DragDrop>
                            </Form.Item>

                            <h5>Title</h5>
                            <Form.Item
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input title',
                                    },
                                ]}
                            >
                                <Input placeholder="e.g.'Random name'" onChange={handleNameChange}/>
                            </Form.Item>


                            <h5>Description</h5>
                            <Form.Item name="description">
                                <Input.TextArea placeholder="e.g.'This is very limited item'"
                                                onChange={handleDescriptionChange}/>
                            </Form.Item>


                            <Form.Item>

                                <Button htmlType="submit" className="btn-main" type="primary">
                                    Go next
                                </Button>

                            </Form.Item>

                        </Form>


                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <PreviewItem image={(typeof image === 'string' && image !== '') ? image : './img/sample.png'} title={name}/>

                    </div>
                </div>


            </section>
        </>
    )
}
export default CreateObject;