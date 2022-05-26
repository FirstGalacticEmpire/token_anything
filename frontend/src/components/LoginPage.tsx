import {FC} from "react";
import LoginForm from "./LoginForm";

interface Props {

}

const LoginPage: FC<Props> = (): JSX.Element => {
    return <>

        <div>

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

                    </div>
                </div>
            </section>

        </div>
    </>
}
export default LoginPage