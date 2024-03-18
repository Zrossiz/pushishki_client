import { ICountryWithLength } from '@/types';
import axios from 'axios';

export const getCountries = async (): Promise<ICountryWithLength | { message: string }> => {
  try {
    const { data } = await axios.get<ICountryWithLength>(`${process.env.API_URL}/country`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении стран'
    };
  }
};
