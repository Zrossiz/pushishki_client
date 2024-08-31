import styles from '../styles/client/Search.module.scss';
import { PageTitle, Quiz, Slider } from '@/pageComponents';
import { findProducts, getBestsellers, getCategories } from '@/api';
import { IProduct, IProductWithLength, ISearchPageProps } from '@/types';
import { Layout } from '@/layout/client/Layout';
import { CatalogItem, Pagination, Search, Sort } from '@/components/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { CLIENT_URL } = publicRuntimeConfig;

const SearchPage = ({ categories, bestsellers, products, curPage }: ISearchPageProps) => {
  const [search, setSearch] = useState<string>('');
  const [interProducts, setInterProducts] = useState<IProduct[]>([]);
  const [startSearch, setStartSearch] = useState<boolean>(false);

  const router = useRouter();

  const intermidateSearch = async (letter: string) => {
    if (!startSearch) {
      setStartSearch(true);
    }

    setSearch(letter);
    const products: IProductWithLength | { message: string } = await findProducts(letter, '1');
    if ('data' in products) {
      setInterProducts(products.data);
    }
  };

  const getProducts = async () => {
    setStartSearch(false);
    router.push({
      pathname: router.pathname,
      query: {
        search,
        page: 1,
        sort: 1,
      },
    });
  };

  return (
    <Layout title="Поиск | Пушишки">
      <>
        <PageTitle
          title="Поиск"
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/',
            },
          ]}
          counter="0 товаров"
        />
        <section className={styles.searchWrapper}>
          <div className={styles.search}>
            <Search
              products={interProducts?.length >= 1 ? interProducts : products?.data}
              search={search}
              setSearch={intermidateSearch}
              stateSearch={startSearch}
              getProducts={getProducts}
            />
          </div>
          {products && products?.length >= 1 ? (
            <div className={styles.resultWrapper}>
              <div className={styles.sortWrapper}>
                <Sort />
              </div>
              <div className={styles.itemsWrapper}>
                {products.data.map((item: IProduct) => {
                  let itemHref = `${CLIENT_URL}/categories/${item.category.slug}/`;
                  if (item.subCategoryId) {
                    itemHref += `sub-category/${item.subCategory?.slug}/${item.slug}`;
                  } else {
                    itemHref += String(item.slug);
                  }
                  return <CatalogItem customHref={itemHref} key={item.id} product={item} />;
                })}
              </div>
              <div className={styles.paginationWrapper}>
                <Pagination curPage={curPage} totalPages={products.totalPages} slug={'/search'} />
              </div>
            </div>
          ) : (
            <div className={styles.notFoundWrapper}>Введите артикул или название товара</div>
          )}
        </section>
        <Slider title="Лучшие предложения" products={bestsellers} />
        <Quiz categories={categories?.data} />
      </>
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps = async (context: any) => {
  const curPage = parseInt(context.query.page) || 1;
  const search = context.query.search;
  const sort = context.query.sort;

  const categorires = await getCategories();
  const bestsellers = await getBestsellers();
  const products = await findProducts(search, sort, curPage);

  return {
    props: {
      categorires,
      bestsellers,
      products,
      curPage,
    },
  };
};
