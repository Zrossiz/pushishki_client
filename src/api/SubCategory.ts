import { ISubCategory } from '@/types';
import axios from 'axios';

export const getAllSubCategories = async (
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
