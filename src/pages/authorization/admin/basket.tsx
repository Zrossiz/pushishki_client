import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Basket.module.scss'

const BasketPage = () => {
  return (
    <AdminLayout>
      <div className={styles.listWrapper}></div>
    </AdminLayout>
  );
};

export default BasketPage;
