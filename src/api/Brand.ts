import { IBrand, IBrandWithLength } from '@/types';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getBrands = async (): Promise<IBrandWithLength | { message: string }> => {
  try {
    const { data } = await axios.get<IBrandWithLength>(`${API_URL}/brand`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении брендов',
    };
  }
};

export const updateBrand = async (
  brandId: number,
  brandName: string,
): Promise<IBrand | { message: string }> => {
  try {
    const { data } = await axiosInst.put<IBrand>(`${API_URL}/brand/${brandId}`, {
      name: brandName,
    });
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при обновлении бренда',
    };
  }
};

export const createBrand = async (
  countryId: number,
  name: string,
): Promise<IBrand | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IBrand>(`${API_URL}/brand`, {
      name,
      countryId,
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании бренда',
    };
  }
};


export const deleteBrand = async (slug: string): Promise<IBrand | { message: string }> => {
  try { 
    const { data } = await axiosInst.delete<IBrand>(`${API_URL}/brand/${slug}`);
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при удалении бренда'
    }
  }
}