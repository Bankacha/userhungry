import { TOKEN_STORAGE_KEY } from "../constants";
import * as Axios from 'axios';

export const Http = Axios.create({
    baseURL: 'https://hungryherceg.api.veljko.dev'
});

// Token Interceptor
Http.interceptors.request.use((request) => (
    {
        ...request,
        headers: {
            authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`
        }
    })
);