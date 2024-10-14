import { ICreateProduct, IProduct, IProductVariant, IProductWithLength } from '@/types';
import { axiosInst } from '@/utils';
import axios from 'axios';
import getConfig from 'next/config';
import { deleteFile, getProductVariants } from '.';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const getCategoryProducts = async (
  slug: string,
  page: number,
  sort: number,
  priceFrom: number,
  priceTo: number,
  brandsFilter: number[],
  countriesFilter: number[],
  inStock: boolean,
  maximumLoad: number,
  ages: number[],
  voltages: number[],
  drives: number[],
  subCategory?: string,
): Promise<IProductWithLength | { message: string }> => {
  try {
    const sortSetting = sort ? `&sort=${sort}` : '';
    const priceFromSetting = priceFrom ? `&price-from=${priceFrom}` : '';
    const priceToSetting = priceTo ? `&price-to=${priceTo}` : '';
    const inStockSetting = inStock ? `&in-stock=${inStock}` : '';
    const maxLoadSetting = maximumLoad ? `&maximum-load=${maximumLoad}` : '';
    const brandsFilterSetting =
      brandsFilter.length >= 1 ? `&brands=${JSON.stringify(brandsFilter)}` : '';
    const countriesFilterSetting =
      countriesFilter.length >= 1 ? `&countries=${JSON.stringify(countriesFilter)}` : '';
    const agesFilterSetting = ages.length >= 1 ? `&ages=${JSON.stringify(ages)}` : '';
    const voltagesFilterSetting =
      voltages.length >= 1 ? `&voltages=${JSON.stringify(voltages)}` : '';
    const drivesFilterSetting = drives.length >= 1 ? `&drives=${JSON.stringify(drives)}` : '';
    const subCategoryFilterSetting = subCategory ? `&subCategory=${subCategory}` : '';

    const url: string = `${API_URL}/category/${slug}/products?page=${page}${sortSetting}${priceFromSetting}${priceToSetting}${inStockSetting}${maxLoadSetting}${brandsFilterSetting}${countriesFilterSetting}${drivesFilterSetting}${agesFilterSetting}${voltagesFilterSetting}${subCategoryFilterSetting}`;
    const { data } = await axios.get<IProductWithLength>(url);

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении продуктов категории',
    };
  }
};

export const getBestsellers = async (): Promise<IProduct[] | { message: string }> => {
  try {
    const bestsellers = await axios.get<IProduct[]>(`${process.env.API_URL}/product/bestsellers`);

    return bestsellers.data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении бестселлеров',
    };
  }
};

export const getNewProducts = async (): Promise<IProduct[] | { message: string }> => {
  try {
    const newProducts = await axios.get<IProduct[]>(`${process.env.API_URL}/product/new`);

    return newProducts.data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении новинок',
    };
  }
};

export const getAccessories = async (): Promise<IProductWithLength | { message: string }> => {
  try {
    const accessories = await axios.get<IProductWithLength>(
      `${process.env.API_URL}/category/aksessury/products`,
    );
    return accessories.data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении новинок',
    };
  }
};

export const getOneProduct = async (slug: string): Promise<IProduct | { message: string }> => {
  try {
    const product = await axios.get<IProduct>(`${process.env.API_URL}/product/${slug}`);

    return product.data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении товара',
    };
  }
};

export const findProducts = async (
  letter: string,
  sort: string,
  page?: number,
): Promise<IProductWithLength | { message: string }> => {
  try {
    const products = await axios.get<IProductWithLength>(
      `${API_URL}/product/search?search=${letter}&sort=${sort}&page=${page}`,
    );
    return products.data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при поиске товаров',
    };
  }
};

export const getAllProducts = async (
  page?: number,
): Promise<IProductWithLength | { message: string }> => {
  try {
    const products = await axios.get(`${API_URL}/product?page=${page}`);
    return products.data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при получении товаров',
    };
  }
};

export const create = async (data: ICreateProduct) => {
  try {
    const product = await axiosInst.post(`${API_URL}/product`, data).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании товара',
    };
  }
};

export const createSubCategoriesRelationForProduct = async (productId: number, subCategories: number[]) => {
  try {
    const { data } = await axiosInst.post(`${API_URL}/product/sub-categories/${productId}`, {
      subCategories
    });

    return data;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при создании товара',
    };
  }
}

export const updateProduct = async (data: ICreateProduct, id?: number) => {
  try {
    const product = await axiosInst.put(`${API_URL}/product/${id}/update`, data);
    return product;
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при обновлении товара',
    };
  }
};

export const deleteProductFiles = async (productId: number): Promise<{ message: string }> => {
  try {
    const productVariants: IProductVariant[] | { message: string } =
      await getProductVariants(productId);
    if (Array.isArray(productVariants)) {
      for (let i = 0; i < productVariants.length; i++) {
        productVariants[i].images.map(async (item) => {
          try {
            await deleteFile(item);
          } catch (err) {
            console.log(err);
          }
        });
      }
    }
    return {
      message: 'Изображения товара успешно удалены',
    };
  } catch (err) {
    console.log(err);
    return {
      message: 'Ошибка при удалении товара',
    };
  }
};
