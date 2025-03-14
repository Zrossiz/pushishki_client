import {
  checkUser,
  findProducts,
  getAllAges,
  getAllDrives,
  getAllManufacturers,
  getAllProducts,
  getAllSubCategories,
  getAllVoltages,
  getBrands,
  getCategories,
  getCountries,
} from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IAdminProduct, IProduct, IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';
import styles from '../../../styles/admin/Product.module.scss';
import { Pagination, ProductForm, ProductListItem } from '@/components/admin';
import { LinkButton } from '@/elements';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const ProductPage = ({
  brands,
  categories,
  countries,
  ages,
  voltages,
  subCategories,
  drives,
  manufacturers,
}: IAdminProduct) => {
  const [products, setProducts] = useState<IProductWithLength | { message: string }>();
  const [foundedProducts, setFoundedProducts] = useState<
    IProductWithLength | { message: string }
  >();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts(page);
        setProducts(productsData);
      } catch (error) {
        setProducts({ message: 'Error fetching products' });
      }
    };

    fetchProducts();
  }, [page]);

  useEffect(() => {
    (async () => {
      const products: IProductWithLength | { message: string } = await findProducts(
        search,
        String(page),
      );
      setFoundedProducts(products);
    })();
  }, [search]);

  return (
    <AdminLayout>
      <>
        {create && (
          <ProductForm
            setOpen={setCreate}
            countries={countries}
            brands={brands}
            categories={categories}
            drives={drives}
            voltages={voltages}
            ages={ages}
            manufacturers={manufacturers}
          />
        )}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Найти товар"
          />
        </div>
        <div className={styles.listWrapper}>
          {search.length >= 1
            ? foundedProducts &&
              'data' in foundedProducts &&
              foundedProducts.data.map((item: IProduct) => {
                return (
                  <ProductListItem
                    drives={drives}
                    ages={ages}
                    voltages={voltages}
                    product={item}
                    key={item.id}
                    manufacturers={manufacturers}
                    brands={brands}
                    categories={categories}
                    subCategories={subCategories}
                  />
                );
              })
            : products &&
              'data' in products &&
              products.data.map((item: IProduct) => {
                return (
                  <ProductListItem
                    drives={drives}
                    ages={ages}
                    subCategories={subCategories}
                    voltages={voltages}
                    product={item}
                    key={item.id}
                    manufacturers={manufacturers}
                    brands={brands}
                    categories={categories}
                  />
                );
              })}
        </div>
        {search.length === 0 && products && 'totalPages' in products && (
          <div className={styles.paginationWrapper}>
            <Pagination curPage={page} setCurPage={setPage} totalPages={products?.totalPages} />
          </div>
        )}
      </>
    </AdminLayout>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = ctx.req.headers.cookie;
    const isLogin = await checkUser(cookies);

    if (isLogin) {
      const countries = await getCountries();
      const brands = await getBrands();
      const categories = await getCategories();
      const ages = await getAllAges();
      const drives = await getAllDrives();
      const voltages = await getAllVoltages();
      const subCategories = await getAllSubCategories();
      const manufacturers = await getAllManufacturers();

      return {
        props: {
          categories,
          countries,
          brands,
          ages,
          drives,
          voltages,
          subCategories,
          manufacturers,
        },
      };
    } else {
      return {
        redirect: {
          destination: '/authorization/login',
          permanent: false,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/authorization/login',
        permanent: false,
      },
    };
  }
};
