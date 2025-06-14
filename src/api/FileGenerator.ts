import { axiosInst } from '@/utils';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const createDriveLicense = async (
    name: string,
    surname: string,
    birthDate: string,
    city: string,
    file: File
) => {
    try {
        const formData = new FormData();
    
        formData.append("name", name)
        formData.append("surname", surname)
        formData.append("birthDate", birthDate)
        formData.append("city", city)
        formData.append("file", file)
    
        const { data } = await axiosInst.post(`${API_URL}/file-generator/license`, formData)

        return data.url;
    } catch (err) {
        console.log(err)
    }
}