import { IProductVariant } from '@/types';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getProductVariants = async (
  productId: number,
): Promise<IProductVariant[] | { message: string }> => {
  try {
    const { data } = await axios.get<IProductVariant[]>(
      `${API_URL}/product-variant/product/${productId}`,
    );

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении вариантов товара',
    };
  }
};

export const createProductVariant = async (
  productId: number,
  colorId: number,
  price: number,
  images?: string[],
): Promise<IProductVariant | { message: string }> => {
  try {
    const { data } = await axiosInst.post(`${API_URL}/product-variant`, {
      productId,
      colorId,
      price,
      images,
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании варианта товара',
    };
  }
};

export const deleteProductVariant = async (
  variantId: number,
): Promise<IProductVariant | { message: string }> => {
  try {
    const { data } = await axiosInst.delete(`${API_URL}/product-variant/${variantId}`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при удалении варианта товара',
    };
  }
};
