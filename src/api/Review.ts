import { IReview, IReviewWithLength } from '@/types';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL, BOT_URL } = publicRuntimeConfig;

export const getReviewsProduct = async (
  id: number,
  all?: boolean,
): Promise<IReview[] | { message: string }> => {
  try {
    const { data } = await axios.get<IReview[]>(`${API_URL}/review/product/${id}?all=${all}`);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении отзывов товара',
    };
  }
};

export const postReview = async (
  productId: number,
  name: string,
  rating: number,
  title: string,
  desc: string,
) => {
  try {
    const data = {
      productId: +productId,
      username: String(name),
      title: String(title),
      description: String(desc),
      rating: +rating,
    };
    const review = await axios.post(`${API_URL}/review`, data);
    await axios.post(`${BOT_URL}/bot/review`, {
      id: review.data.id,
      username: String(name),
      title: String(title),
      description: String(desc),
      rating: +rating,
    });
    return 'Success';
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при публикации отзыва',
    };
  }
};

export const updateReview = async (
  id: number,
  title: string,
  description: string,
  rating: number,
  active: boolean,
) => {
  try {
    const updatedReview = axiosInst.put(`${API_URL}/review/${id}/update`, {
      title,
      description,
      rating,
      active,
    });
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при обновлении отзыва',
    };
  }
};
