import { findProducts, getAllProducts } from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IProduct, IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';
import styles from '../../styles/admin/Product.module.scss';
import { ProductListItem } from '@/components/admin';

const ProductPage = () => {
  const [products, setProducts] = useState<IProductWithLength | { message: string }>();
  const [foundedProducts, setFoundedProducts] = useState<
    IProductWithLength | { message: string }
  >();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

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
        <div className={styles.addButtonWrapper}>
          <button>Добавить товар</button>
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
