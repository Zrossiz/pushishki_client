import { getAllProducts } from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IProduct, IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';
import styles from '../../styles/admin/Product.module.scss';
import getConfig from 'next/config';
import Image from 'next/image';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

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
          {products && 'data' in products && products.data.map((item: IProduct, index: number) => (
            <div className={styles.itemWrapper} key={index}>
              <div className={styles.image}>
                <Image fill alt={item.name} src={`${FILESERVER_URL}/upload/${item.image}`} />
              </div>
              <div className={styles.name}>
                {item.name}
              </div>
              <div className={styles.options}>
                <div className={styles.edit}>Редактировать</div>
                <div className={styles.delete}>Удалить</div>
              </div>
            </div>
          ))}
        </div>
      </>
    </AdminLayout>
  );
};

export default ProductPage;
