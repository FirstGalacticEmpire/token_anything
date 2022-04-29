import axios from 'axios'

class APIClient {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:8000/',
            timeout: 7000,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                // "Access-Control-Allow-Origin": "*"
            }
        });
        this.Register = this.Register.bind(this)
    }

    async Register() {
        return await this.axiosInstance.post('/authentication/register/',
            {
                "username": "debil",
                "password": "debil123",
                "email": "maslana146@gmail.com",
                "first_name": "debil",
                "last_name": "debil"
            })
    }}

const apiClient = new APIClient();
export default apiClient;