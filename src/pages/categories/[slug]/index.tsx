import {
  getBestsellers,
  getBrands,
  getCategories,
  getCategory,
  getCategoryProducts,
  getCountries
} from '@/api';
import { Layout } from '@/layout/client/Layout';
import { Catalog, PageTitle, Quiz, Slider } from '@/pageComponents';
import { ICatalogPageProps } from '@/types';
import Head from 'next/head';

const CategoryPage = ({
  brands,
  countries,
  products,
  curPage,
  bestSellers,
  category,
  categories
}: ICatalogPageProps) => {
  return (
    <Layout
      title={`${category?.metaTitle} | Пушишки`}
      description={category?.metaDescription}
      keyWords={category?.metaKeyWords}
    >
      <>
        <PageTitle
          title={'Каталог'}
          counter={`${products && products?.totalPages * 10} товаров`}
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/'
            },
            {
              name: `Категории`,
              path: `/categories`
            }
          ]}
        />
        <Catalog brands={brands} countries={countries} products={products} curPage={curPage} />
        <Slider title={'Лучшие предложения'} products={bestSellers} />
        <Quiz categories={categories?.data} />
      </>
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const curPage = parseInt(context.query.page) || 1;
  const sort = context.query?.sort;
  const priceRangeFrom = +context.query?.priceRangeFrom;
  const priceRangeTo = +context.query?.priceRangeTo || 999999;
  const selectedBrands = context.query?.selectedBrands || '[]';
  const selectedCountries = context.query?.selectedCountries || '[]';
  const inStock = Boolean(context.query?.inStock);
  const maxLoad = +context.query?.maxLoad;

  const category = await getCategory(slug);
  const brands = await getBrands();
  const countries = await getCountries();
  const bestSellers = await getBestsellers();
  const products = await getCategoryProducts(
    slug,
    curPage,
    sort,
    priceRangeFrom,
    priceRangeTo,
    JSON.parse(selectedBrands),
    JSON.parse(selectedCountries),
    inStock,
    maxLoad
  );
  const categories = await getCategories();

  return {
    props: {
      category,
      brands,
      countries,
      products,
      curPage,
      bestSellers,
      categories
    }
  };
};

export default CategoryPage;
