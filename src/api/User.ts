import { ILoginUser } from '@/types';
import { axiosInst, setCookie } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const loginUser = async (
  username: string,
  password: string,
): Promise<ILoginUser | { message: string }> => {
  try {
    const user = await axiosInst.post(`${API_URL}/auth/login`, {
      username,
      password,
    }, {
      withCredentials: true
    });

    if (user.data.token) {
      setCookie('token', user.data.token, 90);
    }

    return user.data;
  } catch (err) {
    return {
      message: 'Ошибка при авторизации',
    };
  }
};

export const checkUser = async (cookies?: string): Promise<boolean> => {
  try {
    const headers: Record<string, string> = {};
    if (cookies) {
      headers.Cookie = cookies;
    }

    const { data } = await axios.get(`${API_URL}/auth/check`, {
      withCredentials: true,
      headers
    });

    return true;
  } catch (err) {
    return false;
  }
};
