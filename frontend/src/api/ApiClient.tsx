import axios, {Axios, AxiosInstance} from 'axios'

class APIClient {
    private axiosInstance: AxiosInstance;
    // private readonly contractAddress: string;
    // private LotteryContract: Web3.eth.Contract;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/',
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            }
        });
        this.nftList = this.nftList.bind(this)
    }

    // Todo shouldnt be any but type NFT
    async nftList(): Promise<any> {
        return await this.axiosInstance.get(`nft/list`)
    }

}

const apiClient = new APIClient();
export default apiClient;