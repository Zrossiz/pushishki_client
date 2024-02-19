import { IProduct, IProductWithLength } from "@/types";
import axios from "axios";

export const getCategoryProducts = async (
    slug: string, 
    page: number, 
    sort: number,
    priceFrom: number,
    priceTo: number,
    brandsFilter: number[],
    countriesFilter: number[],
    inStock: boolean,
    maximumLoad: number,
): Promise<IProductWithLength | { message: string }> => {
    try {
        const sortSetting = sort ? `&sort=${sort}` : ''; 
        const priceFromSetting = priceFrom ? `&price-from=${priceFrom}` : '';
        const priceToSetting = priceTo ? `&price-to=${priceTo}` : '';
        const inStockSetting = inStock ? `&in-stock=${inStock}` : '';
        const maxLoadSetting = maximumLoad ? `&maximum-load=${maximumLoad}` : '';
        const brandsFilterSetting = brandsFilter.length >= 1 ? `&brands=${JSON.stringify(brandsFilter)}` : '';
        const countriesFilterSetting = countriesFilter.length >= 1 ? `&countries=${JSON.stringify(countriesFilter)}` : '';

        const { data } = await axios.get<IProductWithLength>(`${process.env.API_URL}/category/${slug}/products?page=${page}${sortSetting}${priceFromSetting}${priceToSetting}${inStockSetting}${maxLoadSetting}${brandsFilterSetting}${countriesFilterSetting}`);
        
        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении продуктов категории'
        }
    }
}

export const getBestsellers = async (): Promise<IProductWithLength | { message: string }> => {
    try {
        const bestsellers = await axios.get<IProductWithLength>(`${process.env.API_URL}/product/bestsellers`);

        return bestsellers.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении бестселлеров'
        }
    }
}

export const getNewProducts = async (): Promise<IProduct[] | { message: string }> => {
    try {   
        const newProducts = await axios.get<IProduct[]>(`${process.env.API_URL}/product/new`);

        return newProducts.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении новинок'
        }
    }
}

export const getAccessories = async (): Promise<IProductWithLength | { message: string }> => {
    try {
        const acessories = await axios.get<IProductWithLength>(`${process.env.API_URL}/category/aksessuary/products`);
        return acessories.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении новинок'
        }
    }
}

export const getOne = async (id: number): Promise<IProduct | { message: string }> => {
    try {
        const product = await axios.get<IProduct>(`${process.env.API_URL}/product/${id}`);

        return product.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при получении товара'
        }
    }
}