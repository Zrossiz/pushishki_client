import { IReviewWithLength } from "@/types";
import axios from "axios";

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

export const postReviews = async (productId: number, name: string, rating: number, title: string, desc: string) => {
    try {
        const data = {
            productId,
            username: name,
            title,
            description: desc,
            rating
        };
        await axios.post(`${process.env.API_URL}/review`, data);

        return 'Success';
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при публикации отзыва'
        } 
    }
}