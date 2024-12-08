import { IApiItemCart, IOrder, IOrderWithLength } from '@/types';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';
import { StringDecoder } from 'string_decoder';

const { publicRuntimeConfig } = getConfig();
const { BOT_URL, API_URL } = publicRuntimeConfig;

export const postOrder = async (
  name: string,
  lastName: string,
  address: string,
  phone: string,
  delivery: string,
  price: number,
  products: IApiItemCart[],
): Promise<boolean> => {
  try {
    const { data } = await axiosInst.post(`${API_URL}/order`, {
      name,
      lastname: lastName,
      phone,
      address,
      price,
      basket: {
        objects: products
      }
    });

    const order = await axios.post(`${BOT_URL}/bot/order`, {
      name,
      lastName,
      address,
      phone,
      delivery,
      price,
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const buyOneClick = async (
  name: string,
  phone: string,
  productName: string,
  link: string,
): Promise<boolean | { message: string }> => {
  try {
    await axios.post(`${BOT_URL}/bot/order/oneClick`, {
      name,
      phone,
      productName,
      link,
    });

    return true;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании заказа',
    };
  }
};

export const getAllOrders = async (
  page: number,
): Promise<IOrderWithLength | { message: string }> => {
  try {
    const { data } = await axiosInst.get<IOrderWithLength>(`${API_URL}/order?page=${page}`);
    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении заказов',
    };
  }
};

export const setReadOrder = async (orderId: number): Promise<IOrder | { message: string }> => {
  try {
    const { data } = await axiosInst.put<IOrder>(`${API_URL}/order/read/${orderId}`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении заказов',
    };
  }
};
