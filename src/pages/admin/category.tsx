import { LinkButton } from '@/elements';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../styles/admin/Category.module.scss';
import { useEffect, useState } from 'react';
import { CategoryForm, CategoryListItem } from '@/components/admin';
import { ICategoryWithLength } from '@/types';
import { getCategories } from '@/api';

const CategoryPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategoryWithLength>();

  useEffect(() => {
    (async () => {
      const queryCategories = await getCategories();
      if ('data' in queryCategories) {
        setCategories(queryCategories);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <CategoryForm setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {categories &&
            categories.data.map((item) => {
              return <CategoryListItem category={item} />;
            })}
        </div>
      </>
    </AdminLayout>
  );
};

export default CategoryPage;
