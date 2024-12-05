import { IProduct } from "@/types";
import { axiosInst, fromDateToString, getBoundaryDatesByduration } from "@/utils"
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAveragePrice = async (startDate: Date, endDate: Date): Promise<{price: number}> => {
    try {
        const formattedStart = fromDateToString(startDate);
        const formattedEnd = fromDateToString(endDate);

        const { data } = await axiosInst.get<{price: number}>(`
            ${API_URL}/dashbord/average-sum?dayFrom=${formattedStart}&dayTo=${formattedEnd}
        `);

        return data;
    } catch (err) {
        return {
            price: 0
        }
    }
}

export const getMostSellingProducts = async (startDate: Date, endDate: Date): Promise<IProduct[]> => {
    try {
        const formattedStart = fromDateToString(startDate);
        const formattedEnd = fromDateToString(endDate);

        const { data } = await axiosInst.get<IProduct[]>(`
            ${API_URL}/dashbord/most-selling?dayFrom=${formattedStart}&dayTo=${formattedEnd}
        `);

        return data;
    } catch (err) {
        return [];
    }
}

export const getOrdersSum = async (startDate: Date, endDate: Date): Promise<{sum: number}> => {
    try {
        const formattedStart = fromDateToString(startDate);
        const formattedEnd = fromDateToString(endDate);

        const { data } = await axiosInst.get<{ sum: number }>(`
            ${API_URL}/dashbord/orders-sum?dayFrom=${formattedStart}&dayTo=${formattedEnd}
        `);

        return data;
    } catch (err) {
        return {
            sum: 0
        }
    }
}

export const getOrdersCount = async (startDate: Date, endDate: Date): Promise<{count: number}> => {
    try {
        const formattedStart = fromDateToString(startDate);
        const formattedEnd = fromDateToString(endDate);

        const { data } = await axiosInst.get<{ count: number }>(`
            ${API_URL}/dashbord/orders-number?dayFrom=${formattedStart}&dayTo=${formattedEnd}
        `);

        return data;
    } catch (err) {
        return {
            count: 0
        }
    }
}