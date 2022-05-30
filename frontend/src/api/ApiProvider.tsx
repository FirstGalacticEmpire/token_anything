import * as React from "react"
import APIClient from "./ApiClient";
import {User} from "../components/interfaces/User";
import {useAuthHeader} from "react-auth-kit";

export const APIClientContext = React.createContext<APIClient | undefined>(undefined);

interface Props {
    children?: React.ReactNode;
}
export type ApiContextType = {
    login: (user: User) => Promise<any>
    nftList: (params: any) => Promise<any>
    getNftDetails: (params: any) => Promise<any>
    getAuthorDetails: (params: any) => Promise<any>
    getWalletDetails: (params: any) => Promise<any>
};

const ApiClientProvider: React.FC<Props> = ({ children }) => {
    const authHeader = useAuthHeader()
    const apiClient = React.useMemo(() =>{
        return new APIClient(authHeader())
    }, [authHeader])
    return (
        <APIClientContext.Provider value={apiClient}>{children}</APIClientContext.Provider>
    );
}
export default ApiClientProvider

export function useAPIClient() {
    return React.useContext(APIClientContext);
}