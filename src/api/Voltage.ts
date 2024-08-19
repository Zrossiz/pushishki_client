import { IVoltage } from '@/types/Voltage';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAllVoltages = async (): Promise<IVoltage[] | { message: string }> => {
  try {
    const { data } = await axios.get(`${API_URL}/voltage`);

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при получении объекта вольтажа' };
  }
};

export const createVoltage = async (name: number): Promise<IVoltage | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IVoltage>(`${API_URL}/voltage`, { name });

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при создании объекта вольтажа' };
  }
};

export const updateVoltage = async (
  id: number,
  name: number,
): Promise<IVoltage | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IVoltage>(`${API_URL}/voltage/${id}`, { name });

    return data;
  } catch (err) {
    console.log(err);
    return { message: 'Ошибка при обновлении объекта вольтажа' };
  }
};
