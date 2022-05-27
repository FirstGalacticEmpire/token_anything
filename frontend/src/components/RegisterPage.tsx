import {FC} from "react";
import RegisterForm from "./RegisterForm";

interface Props {

}

const RegisterPage: FC<Props> = (): JSX.Element => {
    return <>

        <div>

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

                    </div>
                </div>
            </section>

        </div>
    </>
}
export default RegisterPage