import { ILoginUser } from "@/types";
import { axiosInst, setCookie } from "@/utils";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const loginUser = async (username: string, password: string): Promise<
    ILoginUser | { message: string }
> => {
    try {
        const user = await axiosInst.post(`${API_URL}/auth/login`, {
            username,
            password
        });

        if (user.data.token) {
            setCookie('token', user.data.token, 90);
        };

        return user.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при авторизации'
        } ;
    }
};

export const checkUser = async (): Promise<{ message: string }> => {
    try {
        const { data } = await axiosInst.post(`${API_URL}/auth/check`);
        return data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при авторизации'
        } ; 
    }
}