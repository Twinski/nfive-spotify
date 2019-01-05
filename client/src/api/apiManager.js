import axios from 'axios';
import humps from 'humps';
import { API_BASE } from 'config';

import store from '../redux/config';
import { getToken } from '../redux/auth/auth.selectors';

const apiManager = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  transformRequest: [
    data => {
      // convert all body keys to snake_case
      data = humps.decamelizeKeys(data);
      // convert all body objects to strings
      if (typeof data === 'object') {
        data = JSON.stringify(data);
      }

      return data;
    },
  ],
  transformResponse: [
    data => {
      try {
        // convert all body keys to camelCase
        data = humps.camelizeKeys(JSON.parse(data));
        return data;
      } catch (error) {
        return data;
      }
    },
  ],
});

// Add Authorization header
apiManager.interceptors.request.use((config) => {
  const token = getToken(store.getState());
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

// TODO: ...
// intercept responses
// Refresh token?
apiManager.interceptors.request.use();

export default apiManager;