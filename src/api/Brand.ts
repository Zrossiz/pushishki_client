import { IBrandWithLength } from '@/types';
import axios from 'axios';

export const getBrands = async (): Promise<IBrandWithLength | { message: string }> => {
  try {
    const { data } = await axios.get<IBrandWithLength>(`${process.env.API_URL}/brand`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении брендов',
    };
  }
};
