import { IProductWithLength } from "@/types";
import axios from "axios";

export const getCategoryProducts = async (slug: string, page: number = 1, sort: string): Promise<IProductWithLength | { message: string }> => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/category/${slug}/products?page=${page}&sort=${sort}`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении продуктов категории'
        }
    }
}