import axios, {Axios, AxiosInstance} from 'axios'
import {User} from "../components/interfaces/User";
import {Tokens} from "../components/interfaces/Tokens";


class APIClient {
    private axiosInstance: AxiosInstance;
    private authHeader: any;
    // private readonly contractAddress: string;
    // private LotteryContract: Web3.eth.Contract;
    constructor(authHeader: string) {
        this.authHeader = authHeader;
        if (this.authHeader){
            this.axiosInstance = axios.create({
                baseURL: 'http://127.0.0.1:8000/',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'authorization': this.authHeader
                }
            });
        }else{
            this.axiosInstance = axios.create({
                baseURL: 'http://127.0.0.1:8000/',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                }
            });
        }

        this.nftList = this.nftList.bind(this)
        this.getNftDetails = this.getNftDetails.bind(this)
        this.login = this.login.bind(this)
    }

    setupLogin(tokens: Tokens) {
        this.axiosInstance.defaults.headers.common['authorization'] = `Bearer ${tokens.access_token}`
    }

    async login(user: User): Promise<any> {
        return await this.axiosInstance.post('authentication/login/', JSON.stringify(user))
    }

    // Todo shouldnt be any but type NFT
    async nftList(params: any): Promise<any> {
        return await this.axiosInstance.get(`nft/list`)
    }

    // Todo params typing is wrong
    async getNftDetails(params: any): Promise<any> {
        const nftId = params.queryKey[1]
        return await this.axiosInstance.get(`nft/details/${nftId}`)
    }

}

// const apiClient = new APIClient();
export default APIClient;