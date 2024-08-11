import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { HTag, LinkButton } from '@/elements';
import { ISubCategory } from '@/types';
import { getAllSubCategories } from '@/api';

const SubCategoryPage = () => {
  const [subCategories, setSubCategories] = useState<ISubCategory[]>([]);

  useEffect(() => {
    (async () => {
      const apiSubCategories = await getAllSubCategories();
      if (Array.isArray(apiSubCategories)) {
        setSubCategories(apiSubCategories);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        <div className={styles.addButtonWrapper}>
            <LinkButton element="button">
              Добавить
            </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {subCategories.length > 0 ? (
            subCategories.map((item) => {
              return (
                <div>{item.name}</div>
              );
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default SubCategoryPage;
