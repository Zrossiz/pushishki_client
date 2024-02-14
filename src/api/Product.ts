import { IProductWithLength } from "@/types";
import axios from "axios";

export const getCategoryProducts = async (slug: string, page: number = 1, sort: string): Promise<IProductWithLength | { message: string }> => {
    try {

        const sortSetting = sort ? `&sort=${sort}` : ''; 

        const { data } = await axios.get(`${process.env.API_URL}/category/${slug}/products?page=${page}${sortSetting}`);
        console.log(`${process.env.API_URL}/category/${slug}/products?page=${page}${sortSetting}`);
        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении продуктов категории'
        }
    }
}