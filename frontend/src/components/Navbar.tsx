import React, {FC, useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

interface Props {
    selectedKey: string
}

const Navbar: FC<Props> = ({selectedKey}): JSX.Element => {
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<Array<string>>([selectedKey])
    const location = useLocation();

    // Todo this is wrong, more optimal way needs to be found
    useEffect(() => {
        if (location.pathname.includes("gallery")) {
            setDefaultSelectedKeys(['gallery'])
        } else if (location.pathname.includes("/")) {
            setDefaultSelectedKeys(['landingPage'])
        } else if (location.pathname.includes("/landingPage")) {
            setDefaultSelectedKeys(['landingPage'])
        }
    }, [location.pathname])


    return (<>
        <Menu mode="horizontal" selectedKeys={defaultSelectedKeys}>
            <Menu.Item key="landingPage" icon={<MailOutlined/>}>
                <Link onClick={() => setDefaultSelectedKeys(["landingPage"])} to="/">LandingPage</Link>
            </Menu.Item>
            <Menu.Item key="gallery" icon={<AppstoreOutlined/>}>
                <Link onClick={() => setDefaultSelectedKeys(["gallery"])} to="/gallery">Gallery</Link>
            </Menu.Item>
        </Menu>
    </>)
}
export default Navbar