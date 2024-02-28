import { IReviewWithLength } from "@/types";
import axios from "axios";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getReviewsProduct = async (id: number): Promise<IReviewWithLength | { message: string }> => {
    try {
        const { data } = await axios.get<IReviewWithLength>(`${process.env.API_URL}/review/product/${id}`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении отзывов товара'
        } 
    }
}

export const postReview = async (productId: number, name: string, rating: number, title: string, desc: string) => {
    try {
        const data = {
            productId: +productId,
            username: String(name),
            title: String(title),
            description: String(desc),
            rating: +rating
        };
        await axios.post(`${API_URL}/review`, data);
        return 'Success';
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при публикации отзыва'
        } 
    }
}