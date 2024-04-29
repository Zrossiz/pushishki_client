import { IBrandWithLength } from '@/types';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getBrands = async (): Promise<IBrandWithLength | { message: string }> => {
  try {
    const { data } = await axios.get<IBrandWithLength>(`${API_URL}/brand`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении брендов',
    };
  }
};
