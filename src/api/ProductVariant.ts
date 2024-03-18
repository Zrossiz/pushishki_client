import { IProductVariant } from '@/types';
import axios from 'axios';

export const getProductVariants = async (
  productId: number
): Promise<IProductVariant[] | { message: string }> => {
  try {
    const { data } = await axios.get<IProductVariant[]>(
      `${process.env.API_URL}/product-variant/product/${productId}`
    );

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении вариантов товара'
    };
  }
};
