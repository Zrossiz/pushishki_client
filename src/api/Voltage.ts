import { IVoltage } from "@/types/Voltage";
import axios from "axios";

export const getAllVoltages = async (): Promise<IVoltage[] | { message: string }> => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/voltage`);

        return data;
    } catch (err) {
        console.log(err);
        return { message: "Ошибка при получении объекта вольтажа" }
    }
}