import axios from 'axios';
import { baseUrl } from 'src/config/url.config';

const api = axios.create({ baseURL: baseUrl });

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${
    JSON.parse(`${localStorage.getItem('token')}`).state.accessToken
  }`;
  return config;
};
api.interceptors.request.use(authInterceptor);

export { api };
