import { getAllProducts } from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IProduct, IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';
import styles from '../../styles/admin/Product.module.scss';
import { ProductListItem } from '@/components/admin';

const ProductPage = () => {
  const [products, setProducts] = useState<IProductWithLength | { message: string }>();
  const [page, setPage] = useState<number>(1);

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

  return (
    <AdminLayout>
      <>
        <div className={styles.addButtonWrapper}>
          <button>
            Добавить товар
          </button>
        </div>
        <div className={styles.listWrapper}>
          {products && 'data' in products && products.data.map((item: IProduct) => {
            return (
              <ProductListItem product={item} key={item.id} />
            )
          })}
        </div>
      </>
    </AdminLayout>
  );
};

export default ProductPage;
