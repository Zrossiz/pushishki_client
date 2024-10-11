import { IManufacturer } from "@/types/Manufacturer"
import axios from "axios";
import { axiosInst } from "@/utils";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const createManufacturer = async  (name: string): Promise<IManufacturer | { message: string }> => {
    try {
        const { data } = await axiosInst.post(`${API_URL}/manufacturer`, {
            name
        });

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: "Ошибка при создании производителя"
        }
    }
}

export const getAllManufacturers = async (): Promise<IManufacturer[] | { message: string }> => {
    try {
        const { data } = await axios.get(`${API_URL}/manufacturer`);
        return data;
    } catch (err) {
        console.log(err);
        return {
            message: "Ошибка при получении производителей",
        }
    }
}

export const deleteManufacturer = async (id: number): Promise<IManufacturer | { message: string }> => {
    try {
        const { data } = await axiosInst.delete(`${API_URL}/manufacturer/${id}`)

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: "Ошибка при удалении производителя"
        }
    }
}

export const updateManufacturer = async (id: number, name: string): Promise<IManufacturer | { message: string }> => {
    try {
        const { data } = await axiosInst.put(`${API_URL}/manufacturer/${id}`, {
            name
        })

        return data;
    } catch (err) {
        console.log(err);
        return {
            message: "Ошибка при обновлении производителя"
        }
    }
}