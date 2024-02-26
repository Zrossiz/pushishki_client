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