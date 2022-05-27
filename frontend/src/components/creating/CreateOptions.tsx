import React, {FC} from 'react';
import {Link} from 'react-router-dom';


const CreateOptions: FC<{}> = props =>{
    return (
        <>
            <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'/img/subheader.jpg'})`}}>
                <div className='mainbreadcumb'>
                    <div className='container'>
                        <div className='row m-10-hor'>
                            <div className='col-12'>
                                <h1 className='text-center'>Create Token</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className="col-md-6 offset-md-3">
                        <p>Choose how you wanna back your token: by using some crypto, or by using real object</p>
                        <Link to="/create-crypto" className="opt-create">
                            <img src="/img/cry.png" alt=""/>
                            <h3>Crypto- currency</h3>
                        </Link>
                        <Link to="/create-object" className="opt-create">
                            <img src="/img/obj.png" alt=""/>
                            <h3>Physical Object</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CreateOptions;