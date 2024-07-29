import {
  getAllAges,
  getAllDrives,
  getAllVoltages,
  getBestsellers,
  getBrands,
  getCategories,
  getCategory,
  getCategoryProducts,
  getCountries,
  getOneSubCategory,
} from '@/api';
import { Layout } from '@/layout/client/Layout';
import { Catalog, PageTitle, Quiz, Slider } from '@/pageComponents';
import { ICatalogSubCategoryPageProps } from '@/types';

const SubCategoryPage = ({
  brands,
  countries,
  products,
  curPage,
  bestSellers,
  category,
  categories,
  ages,
  voltages,
  drives,
  subCategory,
}: ICatalogSubCategoryPageProps) => {
  return (
    <Layout
      title={`${subCategory?.metaTitle || 'Подкатегории'} | Пушишки`}
      description={subCategory?.metaDescription}
      keyWords={subCategory?.metaKeyWords}>
      <>
        <PageTitle
          title={'Каталог'}
          counter={`${products?.totalPages ? products?.totalPages * 10 : 0} товаров`}
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/',
            },
            {
              name: `Категории`,
              path: `/categories`,
            },
            {
              name: 'Подкатегории',
              path: '/categories/velotehnika',
            },
          ]}
        />
        <Catalog
          brands={brands}
          countries={countries}
          products={products}
          curPage={curPage}
          voltage={voltages}
          drives={drives}
          age={ages}
        />
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
  const selectedBrands = context.query?.brands || '[]';
  const selectedCountries = context.query?.selectedCountries || '[]';
  const inStock = Boolean(context.query?.inStock);
  const maxLoad = +context.query?.maxLoad;
  const selectedAges = context.query?.ages || '[]';
  const selectedVoltages = context.query?.voltages || '[]';
  const selectedDrives = context.query?.drives || '[]';

  const ages = await getAllAges();
  const drives = await getAllDrives();
  const voltages = await getAllVoltages();
  const category = await getCategory('velotehnika');
  const brands = await getBrands();
  const countries = await getCountries();
  const bestSellers = await getBestsellers();
  const subCategory = await getOneSubCategory(slug);
  const products = await getCategoryProducts(
    'velotehnika',
    curPage,
    sort,
    priceRangeFrom,
    priceRangeTo,
    JSON.parse(selectedBrands),
    JSON.parse(selectedCountries),
    inStock,
    maxLoad,
    JSON.parse(selectedAges),
    JSON.parse(selectedVoltages),
    JSON.parse(selectedDrives),
    slug,
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
      categories,
      ages,
      voltages,
      drives,
      subCategory,
    },
  };
};

export default SubCategoryPage;
