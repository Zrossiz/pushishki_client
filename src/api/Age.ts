import { IAge } from '@/types';
import axios from 'axios';

export const getAllAges = async (): Promise<IAge[] | { message: string }> => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/age`);

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при получении возраста' };
  }
};
