import * as React from "react";
import {useAuthHeader, useIsAuthenticated} from "react-auth-kit";
import APIClient from "./ApiClient";
import {APIClientContext} from "./ApiProvider";
import {Navigate} from "react-router-dom";

interface Props {
    children: React.ReactNode;
}


const AuthenticatedRoute: ({children}: { children: any }) => (any) = ({children}) => {
    const isAuthenticated = useIsAuthenticated()
    if(isAuthenticated()){
        return children
    }else {
        return <Navigate to="/login"/>
    }
    // const authHeader = useAuthHeader()
    // const apiClient = React.useMemo(() =>{
    //     return new APIClient(authHeader())
    // }, [authHeader])
    // return (
    //     <APIClientContext.Provider value={apiClient}>{children}</APIClientContext.Provider>
    // );
}
export default AuthenticatedRoute