import React, {FC} from 'react';
import {Link} from 'react-router-dom';

interface Props {
    message?: string
}

const Main: FC<Props> = ({message}): JSX.Element =>{
    return (<div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 m-auto">
                <div className="spacer-single"></div>
                <div className="spacer-double"></div>
                    <h1 className="text-center">Create, sell or collect digital items.</h1>
                    <p className="lead text-center">
                        Easiest place to buy and sell cryptocurrency. <br/>Sign up and get started today.
                    </p>
                <div className="spacer-10"></div>
                    <div className='d-flex justify-content-center'>

                        <Link to={"/gallery"} >
                            <span  className="btn-main inline lead">Explore</span>
                        </Link>
                        <Link to={"/options"}>
                            <span  className="btn-main inline white lead mx-0">Create</span>
                        </Link>

                    </div>
                    <div className="spacer-single"></div>
                    <div className="spacer-double"></div>
            </div>
        </div>
    </div>)
}

export default Main;