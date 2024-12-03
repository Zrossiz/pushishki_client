import { axiosInst, fromDateToString } from "@/utils"
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getAveragePrice = async (duration: string): Promise<{price: number}> => {
    try {
        let dateFrom: Date = new Date();
        const dateTo: Date = new Date();

        switch (duration) {
            case 'day':
                dateFrom.setDate(dateFrom.getDate() - 1)
                break;
            case 'week':
                dateFrom.setDate(dateFrom.getDate() - 7)
                break;
            case 'month':
                dateFrom.setMonth(dateFrom.getMonth() - 1)
                break
            case 'year':
                dateFrom.setFullYear(dateFrom.getFullYear() - 1)
                break
            default:
                return {price: 0}
        }

        const fromDateString = fromDateToString(dateFrom);
        const toDateString = fromDateToString(dateTo)

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