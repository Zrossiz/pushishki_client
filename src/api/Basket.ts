import { IApiItemCart } from '@/types';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { BOT_URL, API_URL } = publicRuntimeConfig;

export const createBasket = async (apiBasket: IApiItemCart[]) => {
  try {
    const { data } = await axios.post(`${API_URL}/basket`, {
      objects: apiBasket,
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании корзины',
    };
  }
};
