import { IProductVariant } from '@/types';
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
