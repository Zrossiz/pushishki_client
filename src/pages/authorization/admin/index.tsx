import { checkUser } from '@/api';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/layout/admin/AdminLayout';

const AdminPage = () => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const isLogin = await checkUser();
      if (isLogin.message.startsWith('Ошибка')) {
        return router.push('/authorization/login');
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <div>Инфо</div>
    </AdminLayout>
  );
};

export default AdminPage;
