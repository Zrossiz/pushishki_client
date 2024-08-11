import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Voltage.module.scss';
import { useEffect, useState } from 'react';
import { IDrive, IVoltage } from '@/types';
import { getAllDrives, getAllVoltages } from '@/api';
import { HTag, LinkButton } from '@/elements';
import { DriveListItem, VoltageListItem } from '@/components/admin';

const DrivePage = () => {
  const [drives, setDrives] = useState<IDrive[]>([]);

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
        <div className={styles.addButtonWrapper}>
            <LinkButton element="button">
              Добавить
            </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {drives.length > 0 ? (
            drives.map((item) => {
              return (
                <DriveListItem key={item.id} drive={item} />
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

export default DrivePage;
