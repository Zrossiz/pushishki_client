import { ICountry, ICountryWithLength } from '@/types';
import { axiosInst } from '@/utils';
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

export const createCountry = async (name: string): Promise<ICountry | { message: string }> => {
  try {
    const { data } = await axiosInst.post<ICountry>(`${API_URL}/country`, {
      name
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании стран',
    };
  }
}

export const updateCountry = async (slug: string, name: string): Promise<ICountry | { message: string }> => {
  try {
    const { data } = await axiosInst.post<ICountry>(`${API_URL}/country/${slug}`, {
      name
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при обновлении страны'
    }
  }
}