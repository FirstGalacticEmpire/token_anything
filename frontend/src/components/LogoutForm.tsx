import {FC} from "react";
import LoginForm from "./LoginForm";
import {useIsAuthenticated} from "react-auth-kit";
import {Button} from "antd";
import {useSignOut} from 'react-auth-kit'

interface Props {

}

const LogoutForm: FC<Props> = (): JSX.Element => {
    const signOut = useSignOut()
    const isAuthenticated = useIsAuthenticated()
    if(!isAuthenticated()){
        return (<>You are already logged-out.</>)
    }

    return (<>
        <Button onClick={() => {
            signOut()
        }}>Logout</Button>
    </>)
}
export default LogoutForm