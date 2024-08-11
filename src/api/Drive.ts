import { IDrive } from '@/types/Drive';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAllDrives = async (): Promise<IDrive | { message: string }> => {
  try {
    const { data } = await axios.get(`${API_URL}/drive`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании заказа',
    };
  }
};
