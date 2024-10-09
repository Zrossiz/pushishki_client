import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const uploadFiles = async (
  files: File[] | File,
  watermark?: boolean,
): Promise<{ message: string }> => {
  try {
    const formData = new FormData();

    if (Array.isArray(files)) {
      files.forEach((file) => {
        formData.append('files', file);
      });
    } else {
      formData.append('files', files);
    }

    await axios.post(`${FILESERVER_URL}/upload${watermark ? '?watermark=true' : ''}`, formData);

    return {
      message: 'Успешно',
    };
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при загрузке файла',
    };
  }
};

export const deleteFile = async (fileName: string): Promise<{ message: string }> => {
  try {
    await axios.delete(`${FILESERVER_URL}/upload/${fileName}`);
    return {
      message: 'Успешно',
    };
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при удалении файла',
    };
  }
};
