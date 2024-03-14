import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL, BOT_URL } = publicRuntimeConfig;

export const postOrder = async (
    name: string,
    lastName: string,
    address: string,
    phone: string,
    delivery: string,
    price: number,
) => {
    try {
        const order = await axios.post(`${BOT_URL}/bot/order`, {
            name,
            lastName,
            address,
            phone,
            delivery,
            price,
        });

        return order.data;
    } catch (err) {
        console.log(err);
        return {
            message: 'Ошибка при создании заказа'
        }
    }
}