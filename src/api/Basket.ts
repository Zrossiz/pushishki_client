import { IApiItemCart, IBasketItem } from '@/types';
import { axiosInst } from '@/utils';
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

export const getBasketByOrder = async (orderId: number): Promise<IBasketItem | {message: string}> => {
  try {
    const { data } = await axiosInst.get<IBasketItem>(`${API_URL}/basket/${orderId}`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении корзины'
    }
  };
};