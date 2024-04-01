import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../styles/admin/Color.module.scss';
import { LinkButton } from '@/elements';
import { useState } from 'react';
import { IColor } from '@/types/Color';
import { color } from 'framer-motion';

const ColorPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [colors, setColors] = useState<IColor[]>([]);

  return (
    <AdminLayout>
      <>
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {colors.map((item) => {
            return (
              <div>{item.color}</div>
            )
          })}
        </div>
      </>
    </AdminLayout>
  );
};

export default ColorPage;
