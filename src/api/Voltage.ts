import { IVoltage } from '@/types/Voltage';
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
