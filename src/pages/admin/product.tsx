import { getAllProducts } from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';
import styles from '../../styles/admin/Product.module.scss';

const ProductPage = () => {
  let products: IProductWithLength | { message: string };
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      products = await getAllProducts(page);
    })();
  }, []);
  

  return (
    <AdminLayout>
      <div className={styles.addButtonWrapper}>
        <button>
          Добавить товар
        </button>
      </div>
    </AdminLayout>
  );
};

export default ProductPage;
