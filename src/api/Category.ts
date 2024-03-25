import { ICategory, ICategoryWithLength } from '@/types';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getCategories = async (): Promise<ICategoryWithLength | { message: string }> => {
  try {
    const { data } = await axios.get<ICategoryWithLength>(`${process.env.API_URL}/category`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении категорий',
    };
  }
};

export const getCategory = async (slug: string): Promise<ICategory | { message: string }> => {
  try {
    const { data } = await axios.get<ICategory>(`${process.env.API_URL}/category/${slug}`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении категории',
    };
  }
};

export const createCategory = async (
  name: string,
  image: string,
  metaTitle: string,
  metaDescription: string,
  metaKeyWords: string,
): Promise<ICategory | { message: string }> => {
  try {
    const { data } = await axiosInst.post<ICategory>(`${API_URL}/category`, {
      name,
      image,
      metaTitle,
      metaDescription,
      metaKeyWords,
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении категории',
    };
  }
};
