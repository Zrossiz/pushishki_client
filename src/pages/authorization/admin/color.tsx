import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Color.module.scss';
import { LinkButton } from '@/elements';
import { useEffect, useState } from 'react';
import { IColor } from '@/types/Color';
import { getAllColors } from '@/api';
import { ColorForm, ColorListItem } from '@/components/admin';

const ColorPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [colors, setColors] = useState<IColor[]>([]);

  useEffect(() => {
    (async () => {
      const queryColors = await getAllColors();
      if (Array.isArray(queryColors)) {
        setColors(queryColors);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <ColorForm setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {colors.map((item) => {
            return <ColorListItem color={item} key={item.id} />;
          })}
        </div>
      </>
    </AdminLayout>
  );
};

export default ColorPage;
