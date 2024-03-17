import { checkUser } from '@/api';
import styles from '../../styles/Admin.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const AdminPage = () => {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const isLogin = await checkUser();
            if (isLogin.message.startsWith('Ошибка')) {
                router.push('/auth/login');
            }
        })();
    }, [])

    return (
        <>
            <Head>
                <title>Админ панель</title>
            </Head>
            <div className={styles.adminWrapper}>admin</div>
        </>
    );
};

export default AdminPage;