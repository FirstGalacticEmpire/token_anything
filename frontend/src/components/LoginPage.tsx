import {FC} from "react";
import LoginForm from "./LoginForm";

interface Props {

}

const LoginPage: FC<Props> = (): JSX.Element => {
    return <>

        <div>
            {/*<GlobalStyles/>*/}

            <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/subheader-dark.jpg'})`}}>
                <div className='mainbreadcumb'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12 text-center">
                                <h1>User Login</h1>
                                <p>Anim pariatur cliche reprehenderit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm/>
                        {/*<Formik*/}
                        {/*    enableReinitialize*/}
                        {/*    validationSchema={validationSchema}*/}
                        {/*    initialValues={initialValues}*/}
                        {/*    validateOnMount={validationSchema.isValidSync(initialValues)}*/}
                        {/*    onSubmit={async (values, { setSubmitting, resetForm }) => {*/}
                        {/*        // const submitData = pick(values, [...requiredFields]);*/}
                        {/*        console.log(values)*/}
                        {/*        setSubmitting(true);*/}
                        {/*        await handleSubmitForm(values);*/}
                        {/*        setSubmitting(false);*/}
                        {/*        resetForm();*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    {*/}
                        {/*        ({ values, isSubmitting, isValid }) => {*/}
                        {/*            // const isAllValid = isValid;*/}
                        {/*            // const submitValidationMessage = 'Please fill in all required fields';*/}

                        {/*            return (*/}
                        {/*                <Form className="form-border">*/}
                        {/*                    <h3>Login to your account</h3>*/}
                        {/*                    <div className="field-set">*/}
                        {/*                        <label>Username</label>*/}
                        {/*                        <Field className="form-control" type="email" name="identifier" />*/}
                        {/*                        <ErrorMessage name="identifier" component="div" />*/}
                        {/*                    </div>*/}
                        {/*                    <div className="field-set">*/}
                        {/*                        <Field className="form-control" type="password" name="password" />*/}
                        {/*                        <ErrorMessage name="password" component="div" />*/}
                        {/*                    </div>*/}
                        {/*                    <div id='submit'>*/}
                        {/*                        <input type='submit' id='send_message' value='Login' className="btn btn-main color-2"/>*/}
                        {/*                        <div className="clearfix"></div>*/}

                        {/*                        <div className="spacer-single"></div>*/}

                        {/*                        <ul className="list s3">*/}
                        {/*                            <li>Or login with:</li>*/}
                        {/*                            <li><span>Facebook</span></li>*/}
                        {/*                            <li><span>Google</span></li>*/}
                        {/*                            <li><span>Instagram</span></li>*/}
                        {/*                        </ul>*/}
                        {/*                    </div>*/}
                        {/*                </Form>*/}
                        {/*            )}*/}
                        {/*    }*/}
                        {/*</Formik>*/}
                    </div>
                </div>
            </section>

            {/*<Footer />*/}
        </div>
    </>
}
export default LoginPage