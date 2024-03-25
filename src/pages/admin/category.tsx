import { LinkButton } from '@/elements';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../styles/admin/Category.module.scss';
import { useState } from 'react';
import { CategoryForm } from '@/components/admin';

const CategoryPage = () => {
  const [create, setCreate] = useState<boolean>(false);

  return (
    <AdminLayout>
      <>
        {create && <CategoryForm setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
      </>
    </AdminLayout>
  );
};

export default CategoryPage;
