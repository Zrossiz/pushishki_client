import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProductWithLength } from "@/types";
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

export const getBrands = async (): Promise<IBrandWithLength | { message: string }> => {
    try {
        const { data } = await axios.get<IBrandWithLength>(`${process.env.API_URL}/brand`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении брендов'
        }
    }
}

export const getCountries = async (): Promise<ICountryWithLength | { message: string }> => {
    try {
        const { data } = await axios.get<ICountryWithLength>(`${process.env.API_URL}/country`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении стран'
        }
    }
}

export const getCategoryProducts = async (slug: string): Promise<IProductWithLength | { message: string }> => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/category/${slug}/products`);

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении продуктов категории'
        }
    }
}