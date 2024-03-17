import { checkUser } from '@/api';
import styles from '../../styles/Admin.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import cn from 'classnames';

const AdminPage = () => {
    const router = useRouter();
    const [active, setActive] = useState<string>('Товар');
    const [items, setItems] = useState<any>([]);

    const entities: string[] = [
        'Страна',
        'Бренд',
        'Категория',
        'Товар',
        'Вариант товара',
        'Цвет',
        'Отзыв',
        'Корзина',
        'Заказ',
    ];

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
                <title>Администрирование</title>
            </Head>
            <div className={styles.adminWrapper}>
                <div className={styles.sidebarWrapper}>
                    <div className={styles.active}>
                        {active}
                    </div>
                    <ul className={styles.list}>
                        {entities.map((item, index) => {
                            return (
                                <li 
                                    className={cn(styles.item, {
                                        [styles.active]: item === active
                                    })} 
                                    key={index} 
                                    onClick={() => setActive(item)}
                                >{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.infoWrapper}>
                    инфо
                </div>
            </div>
        </>
    );
};

export default AdminPage;