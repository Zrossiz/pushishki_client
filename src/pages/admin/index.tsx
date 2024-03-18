import { checkUser } from '@/api';
import styles from '../../styles/Admin.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import { AdminLayout } from '@/layout/admin/AdminLayout';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const AdminPage = () => {
  const router = useRouter();
  const [active, setActive] = useState<string>('Товар');
  const [items, setItems] = useState<any[]>([]);

  const entities: { name: string; slug: string }[] = [
    {
      name: 'Страна',
      slug: 'country'
    },
    {
      name: 'Бренд',
      slug: 'brand'
    },
    {
      name: 'Категория',
      slug: 'category'
    },
    {
      name: 'Товар',
      slug: 'product'
    },
    {
      name: 'Заказ',
      slug: 'order'
    },
    {
      name: 'История покупок',
      slug: 'basket'
    },
    {
      name: 'Цвет',
      slug: 'color'
    }
  ];

  useEffect(() => {
    (async () => {
      const isLogin = await checkUser();
      if (isLogin.message.startsWith('Ошибка')) {
        return router.push('/auth/login');
      }
    })();
  }, []);

  const switchEntity = async (entity: { name: string; slug: string }) => {
    setActive(entity.name);
  };

  return (
    <AdminLayout>
      <div>Инфо</div>
    </AdminLayout>
  );
};

export default AdminPage;
