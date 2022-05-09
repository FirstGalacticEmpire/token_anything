import {FC} from "react";
import RegisterForm from "./RegisterForm";

interface Props {

}

const RegisterPage: FC<Props> = (): JSX.Element => {
    return <>

        <div>
            {/*<GlobalStyles />*/}

            <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/subheader-dark.jpg'})`}}>
                <div className='mainbreadcumb'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12 text-center">
                                <h1>Register</h1>
                                <p>Anim pariatur cliche reprehenderit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <h3>Don't have an account? Register now.</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                        <div className="spacer-10"></div>
                        <RegisterForm/>
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
                        {/*                    <div className="row">*/}

                        {/*                        <div className="col-md-6">*/}
                        {/*                            <div className="field-set">*/}
                        {/*                                <label>Email Address:</label>*/}
                        {/*                                <Field className="form-control" type="email" name="email" />*/}
                        {/*                                <ErrorMessage name="email" component="div" />*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}

                        {/*                        <div className="col-md-6">*/}
                        {/*                            <div className="field-set">*/}
                        {/*                                <label>Choose a Username:</label>*/}
                        {/*                                <Field className="form-control" type="text" name="username" />*/}
                        {/*                                <ErrorMessage name="username" component="div" />*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}

                        {/*                        <div className="col-md-6">*/}
                        {/*                            <div className="field-set">*/}
                        {/*                                <label>Password:</label>*/}
                        {/*                                <Field className="form-control" type="password" name="password" />*/}
                        {/*                                <ErrorMessage name="password" component="div" />*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}

                        {/*                        <div className="col-md-6">*/}
                        {/*                            <div className="field-set">*/}
                        {/*                                <label>Re-enter Password:</label>*/}
                        {/*                                <Field className="form-control" type="password" name="password_confirmation" />*/}
                        {/*                                <ErrorMessage name="password_confirmation" component="div" />*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}

                        {/*                        <div className="col-md-12">*/}
                        {/*                            <div id='submit' className="pull-left">*/}
                        {/*                                <input type='submit' id='send_message' value='Register Now' className="btn btn-main color-2" />*/}
                        {/*                            </div>*/}

                        {/*                            <div className="clearfix"></div>*/}
                        {/*                        </div>*/}
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
export default RegisterPage