import { IAge } from '@/types';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAllAges = async (): Promise<IAge[] | { message: string }> => {
  try {
    const { data } = await axios.get(`${API_URL}/age`);

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при получении возраста' };
  }
};
