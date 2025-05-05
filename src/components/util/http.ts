import axios, { AxiosInstance } from "axios";

class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://tomtoc-api.vercel.app/',
            timeout: 10000,
            headers: {
                'Content-type': 'application/json',
            }
        })
    }
}

export const http = new Http().instance;


