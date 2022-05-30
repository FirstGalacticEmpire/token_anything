import {FC, useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import {Menu} from 'antd';
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import {useIsAuthenticated} from "react-auth-kit";
import {Wallet} from "./interfaces/Wallet";

import useOnclickOutside from "react-cool-onclickoutside";
import LogoutForm from "./LogoutForm";
import {useQuery} from "react-query";
import apiClient from "../api/ApiClient";
import {ApiContextType, useAPIClient} from "../api/ApiProvider";
import {toast} from "react-toastify";

interface Props {
    selectedKey: string
}

const Navbar: FC<Props> = ({selectedKey}): JSX.Element => {
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<Array<string>>([selectedKey])
    const location = useLocation();
    const isAuthenticated = useIsAuthenticated()
    const [showpop, btn_icon_pop] = useState(false);
    const [walletAddress, setWalletAddres] = useState("DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME")
    const apiClient = useAPIClient() as ApiContextType

    const refpop = useOnclickOutside(() => {
        closePop();
    });

    const closePop = () => {
        btn_icon_pop(false);
    };

    // Todo this is wrong, more optimal way needs to be found
    useEffect(() => {
        if (location.pathname.includes("gallery")) {
            setDefaultSelectedKeys(['gallery'])
            return
        }
        if (location.pathname.includes("/landingPage")) {
            setDefaultSelectedKeys(['landingPage'])
            return
        }
        if (location.pathname.includes("/login")) {
            setDefaultSelectedKeys(['login'])
            return
        }

        if (location.pathname.includes("/logout")) {
            setDefaultSelectedKeys(['logout'])
            return
        }
        if (location.pathname.includes("/protected")) {
            setDefaultSelectedKeys(['protected'])
            return;
        }
        if (location.pathname.includes("/")) {
            setDefaultSelectedKeys(['landingPage'])
            return
        }
    }, [location.pathname])


        useQuery(['wallet', ],

            apiClient.getWalletDetails, {
                onSuccess: (response) => {
                    const walletData: Wallet = response.data
                    // console.log(walletData)
                    setWalletAddres(walletData.address)
                },
                onError: (e: Error) => {
                    toast("Failed loading your annotation jobs: " + e.message)
                    console.log(e)
                },
                retry: false,
                enabled: isAuthenticated()
            })




    return (<>
        <Menu mode="horizontal" selectedKeys={defaultSelectedKeys}>
            <Menu.Item key="landingPage" icon={<MailOutlined/>}>
                <Link onClick={() => setDefaultSelectedKeys(["landingPage"])} to="/">LandingPage</Link>
            </Menu.Item>

            <Menu.Item key="gallery" icon={<AppstoreOutlined/>}>
                <Link onClick={() => setDefaultSelectedKeys(["gallery"])} to="/gallery">Gallery</Link>
            </Menu.Item>

            {!isAuthenticated() &&
                <Menu.Item key="login" icon={<AppstoreOutlined/>}>
                    <Link onClick={() => setDefaultSelectedKeys(["login"])} to="/login">Login</Link>
                </Menu.Item>
            }


            {isAuthenticated() &&
                <Menu.Item style={{marginLeft: 'auto'}}>
                    <div className='mainside'>

                        <div id="de-click-menu-profile"
                             className="de-menu-profile" onClick={() => btn_icon_pop(!showpop)} ref={refpop}>
                            <img src="/img/face.png" alt=""/>
                            {showpop &&
                                <div className="popshow">
                                    <div className="d-name">
                                        <h4>Test Profile</h4>
                                    </div>
                                    <div className="d-balance">
                                        <h4>Balance</h4>
                                        2.137 ETH
                                    </div>
                                    <div className="d-wallet">
                                        <h4>My Wallet</h4>
                                        <button id="btn_copy" title="Copy Text" onClick={() => {
                                            navigator.clipboard.writeText(walletAddress)
                                        }}>Copy Address</button>
                                        {/*<br></br>*/}
                                    </div>
                                    <div className="d-line"></div>

                                    <LogoutForm/>

                                </div>

                            }
                        </div>
                    </div>
                </Menu.Item>
            }

        </Menu>

    </>)
}
export default Navbar