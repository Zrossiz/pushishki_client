import { ISubCategory } from '@/types';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAllSubCategories = async (): Promise<ISubCategory[] | { message: string }> => {
  try {
    const { data } = await axios.get<ISubCategory[]>(
      `${API_URL}/sub-category`,
    );
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: "Ошибка при получении всех подкатегорий",
    }

  }
}

export const getAllSubCategoriesByCategory = async (
  categorySlug: string,
): Promise<ISubCategory[] | { message: string }> => {
  try {
    const { data } = await axios.get<ISubCategory[]>(
      `${process.env.API_URL}/sub-category/category/${categorySlug}`,
    );

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении подкатегорий',
    };
  }
};

export const getOneSubCategory = async (
  slug: string,
): Promise<ISubCategory | { message: string }> => {
  try {
    const { data } = await axios.get<ISubCategory>(`${process.env.API_URL}/sub-category/${slug}`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении подкатегории',
    };
  }
};
