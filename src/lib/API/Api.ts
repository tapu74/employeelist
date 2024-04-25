import { browser } from '$app/environment';
import type { EmployeeBulkImport } from '$lib/Models/Employee';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

let token;

if (import.meta.env.VITE_BEARER_TOKEN) {
  token = import.meta.env.VITE_BEARER_TOKEN;
} else if (browser) {
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('token');
  } else {
    console.error('Set authorization token in the local storage as token');
  }
}
else {
  console.error('Set authorization token');
}

const api = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});


async function request<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await api.request<T>(config);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(`API Request Error: ${error.message}`);
  }
}

export async function get<T>(url: string): Promise<T> {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url,
  };
  return await request<T>(config);
}

export async function postEmployeeBulk<T>(url: string, data: EmployeeBulkImport): Promise<T> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url,
    data,
  };
  return await request<T>(config);
}



export default api;