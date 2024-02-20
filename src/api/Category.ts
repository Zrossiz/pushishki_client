import { ICategory, ICategoryWithLength } from "@/types";
import axios from "axios";

export const getCategories = async (): Promise<ICategoryWithLength | { message: string }> => {
    try {
        const { data } = await axios.get<ICategoryWithLength>(`${process.env.API_URL}/category`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении категорий'
        }
    }
}

export const getCategory = async (slug: string): Promise<ICategory | { message: string }> => {
    try {
        const { data } = await axios.get<ICategory>(`${process.env.API_URL}/category/${slug}`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении категории'
        }
    }
}