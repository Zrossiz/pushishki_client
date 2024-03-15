import { axiosInst } from "@/utils";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const checkUser = async (username: string, password: string) => {
    try {
        const user = await axiosInst.post(`${API_URL}/auth/login`, {
            username,
            password
        });

        return user.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при авторизации'
        } ;
    }
}