import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Category.module.scss';
import { LinkButton } from '@/elements';
import { useEffect, useState } from 'react';
import { IBrandWithLength } from '@/types';
import { getBrands } from '@/api';


const BrandPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [brands, setBrands] = useState<IBrandWithLength>();

  useEffect(() => {
    (async () => {
      const apiBrands = await getBrands();
      if ('data' in apiBrands) {
        setBrands(apiBrands);
      }
    })()
  }, []);

  console.log(brands);

  return (
    <AdminLayout>
      <>
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>

        </div>
      </>
    </AdminLayout>
  );
};

export default BrandPage;
