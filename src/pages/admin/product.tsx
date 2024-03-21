import { findProducts, getAllProducts, getBrands, getCategories, getCountries } from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IAdminProduct, IProduct, IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';
import styles from '../../styles/admin/Product.module.scss';
import { ProductForm, ProductListItem } from '@/components/admin';

const ProductPage = ({ brands, categories, countries }: IAdminProduct) => {
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
          />
        )}
        <div className={styles.addButtonWrapper}>
          <button onClick={() => setCreate(true)}>Добавить товар</button>
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
                return <ProductListItem product={item} key={item.id} />;
              })
            : products &&
              'data' in products &&
              products.data.map((item: IProduct) => {
                return <ProductListItem product={item} key={item.id} />;
              })}
        </div>
      </>
    </AdminLayout>
  );
};

export default ProductPage;

export const getServerSideProps = async () => {
  const countries = await getCountries();
  const brands = await getBrands();
  const categories = await getCategories();

  return {
    props: {
      categories,
      countries,
      brands,
    },
  };
};
