import { LinkButton } from '@/elements';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../styles/admin/Category.module.scss';
import { useState } from 'react';

const CategoryPage = () => {
  const [create, setCreate] = useState<boolean>(false);

  return (
    <AdminLayout>
      <div className={styles.addButtonWrapper}>
        <LinkButton element='button'>Добавить</LinkButton>
      </div>
    </AdminLayout>
  );
};

export default CategoryPage;
