import {FC, useEffect, useState} from "react";
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
            // setDefaultSelectedKeys(['landingPage'])
        } else if (location.pathname.includes("/landingPage")) {
            setDefaultSelectedKeys(['landingPage'])
        } else if (location.pathname.includes("/login")) {
            setDefaultSelectedKeys(['login'])
        } else if (location.pathname.includes("/protected")) {
            setDefaultSelectedKeys(['protected'])
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
            <Menu.Item key="login" icon={<AppstoreOutlined/>}>
                <Link onClick={() => setDefaultSelectedKeys(["login"])} to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="protected" icon={<AppstoreOutlined/>}>
                <Link onClick={() => setDefaultSelectedKeys(["protected"])} to="/protected">Protected</Link>
            </Menu.Item>
            {/*<Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined/>}>*/}
            {/*    <Menu.Item key="two" icon={<AppstoreOutlined/>}>*/}
            {/*        Navigation Two*/}
            {/*    </Menu.Item>*/}
            {/*    <Menu.Item key="three" icon={<AppstoreOutlined/>}>*/}
            {/*        Navigation Three*/}
            {/*    </Menu.Item>*/}
            {/*    <Menu.ItemGroup title="Item Group">*/}
            {/*        <Menu.Item key="four" icon={<AppstoreOutlined/>}>*/}
            {/*            Navigation Four*/}
            {/*        </Menu.Item>*/}
            {/*        <Menu.Item key="five" icon={<AppstoreOutlined/>}>*/}
            {/*            Navigation Five*/}
            {/*        </Menu.Item>*/}
            {/*    </Menu.ItemGroup>*/}
            {/*</Menu.SubMenu>*/}
        </Menu>
    </>)
}
export default Navbar