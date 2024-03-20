import { ICountryWithLength } from '@/types';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getCountries = async (): Promise<ICountryWithLength | { message: string }> => {
  try {
    const { data } = await axios.get<ICountryWithLength>(`${API_URL}/country`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении стран',
    };
  }
};
