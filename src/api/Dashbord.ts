import { IProduct } from "@/types";
import { axiosInst, getBoundaryDatesByduration } from "@/utils"
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAveragePrice = async (duration: string): Promise<{price: number}> => {
    try {
        const [fromDateString, toDateString] = getBoundaryDatesByduration(duration);

        const { data } = await axiosInst.get<{price: number}>(`
            ${API_URL}/dashbord/average-sum?dayFrom=${fromDateString}&dayTo=${toDateString}
        `);

        return data;
    } catch (err) {
        return {
            price: 0
        }
    }
}

export const getMostSellingProducts = async (duration: string): Promise<IProduct[]> => {
    try {
        const [fromDateString, toDateString] = getBoundaryDatesByduration(duration);

        const { data } = await axiosInst.get<IProduct[]>(`
            ${API_URL}/dashbord/most-selling?dayFrom=${fromDateString}&dayTo=${toDateString}
        `);

        return data;
    } catch (err) {
        return [];
    }
}