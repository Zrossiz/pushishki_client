import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { HTag, LinkButton } from '@/elements';
import { useEffect, useState } from 'react';
import { IBrand, IBrandWithLength } from '@/types';
import { getBrands } from '@/api';
import { BrandForm, BrandListItem } from '@/components/admin';

const BrandPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [brands, setBrands] = useState<IBrandWithLength>();

  useEffect(() => {
    (async () => {
      const apiBrands = await getBrands();
      if ('data' in apiBrands) {
        setBrands(apiBrands);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <BrandForm setOpen={setCreate} isEdit={false} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {brands && brands?.totalPages >= 1 ? (
            brands?.data.map((item: IBrand) => {
              return <BrandListItem key={item.id} brand={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default BrandPage;
