import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      if (!config.headers) {
       
        config.headers = { Authorization: `Bearer ${token}` } as any;
      } else {
      
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (e) {
    
  }
  return config;
});



export default api;
