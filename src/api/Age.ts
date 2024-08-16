import { IAge } from '@/types';
import { axiosInst } from '@/utils';
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

export const updateAge = async (id: number, name: string): Promise<IAge | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IAge>(`${API_URL}/age/${id}`, { name });

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при обновлении возраста' }
  }
}

export const createAge = async (name: string): Promise<IAge | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IAge>(`${API_URL}/age`, { name });

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при создании возраста' }
  }
}