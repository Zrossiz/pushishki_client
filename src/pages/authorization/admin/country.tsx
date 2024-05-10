import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Country.module.scss';
import { LinkButton } from '@/elements';
import { useState } from 'react';

const CountryPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  return (
    <AdminLayout>
      <>
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
          <div className={styles.litsWrapper}>
            
          </div>
        </div>
      </>
    </AdminLayout>
  );
};

export default CountryPage;
