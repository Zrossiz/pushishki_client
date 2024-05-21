import { IColor } from '@/types/Color';
import { axiosInst } from '@/utils';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAllColors = async (): Promise<IColor[] | { message: string }> => {
  try {
    const { data } = await axiosInst.get<IColor[]>(`${API_URL}/color`);
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении цветов',
    };
  }
};

export const createColor = async (
  title: string,
  color?: string,
  image?: string,
): Promise<IColor | { message: string }> => {
  try {
    const { data } = await axiosInst.post<IColor>(`${API_URL}/color`, {
      color,
      title,
      image,
    });
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании цвета',
    };
  }
};

export const deleteColor = async (id: number): Promise<IColor | { message: string }> => {
  try {
    const { data } = await axiosInst.delete<IColor>(`${API_URL}/color/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании цвета',
    };
  }
};
