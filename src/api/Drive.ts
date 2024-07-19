import { IDrive } from "@/types/Drive";
import axios from "axios";

export const getAllDrives = async (): Promise<IDrive | { message: string }> => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/drive`);

        return data;
    } catch (err) {
    console.log(err);
    return {
        message: 'Ошибка при создании заказа',
    };
    }
}