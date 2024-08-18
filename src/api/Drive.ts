import { IDrive } from '@/types/Drive';
import { axiosInst } from '@/utils';
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
      message: 'Ошибка при получении приводов',
    };
  }
};

export const createDrive = async (name: string): Promise<IDrive | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IDrive>(`${API_URL}/drive`, { name });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании привода'
    }
  }
}

export const updateDrive = async (id: number, name: string): Promise<IDrive | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IDrive>(`${API_URL}/drive/${id}`, { name });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при обновлении привода'
    }
  }
}