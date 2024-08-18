import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { IDrive } from '@/types';
import { getAllDrives } from '@/api';
import { HTag, LinkButton } from '@/elements';
import { DriveForm, DriveListItem } from '@/components/admin';

const DrivePage = () => {
  const [drives, setDrives] = useState<IDrive[]>([]);
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const apiDrives = await getAllDrives();
      if (Array.isArray(apiDrives)) {
        setDrives(apiDrives);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create &&
          <DriveForm 
            action='create'
            setOpen={setCreate}
          />
        }
        <div className={styles.addButtonWrapper} onClick={() => setCreate(true)}>
          <LinkButton element="button">Добавить</LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {drives.length > 0 ? (
            drives.map((item) => {
              return <DriveListItem key={item.id} drive={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default DrivePage;
