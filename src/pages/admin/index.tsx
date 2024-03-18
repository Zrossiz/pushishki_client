import { checkUser } from '@/api';
import styles from '../../styles/Admin.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import cn from 'classnames';
import { axiosInst } from '@/utils';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const AdminPage = () => {
    const router = useRouter();
    const [active, setActive] = useState<string>('Товар');
    const [items, setItems] = useState<any[]>([]);

    const entities: {name: string, slug: string}[] = [
        {
            name: 'Страна',
            slug: 'country',
        },
        {
            name: 'Бренд',
            slug: 'brand',
        },
        {
            name: 'Категория',
            slug: 'category',
        },
        {
            name: 'Товар',
            slug: 'product',
        },
        {
            name: 'Заказ',
            slug: 'order',
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

    const switchEntity = async (entity: {name: string, slug: string}) => {
        setActive(entity.name);
    };

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
                                        [styles.active]: item.name === active
                                    })} 
                                    key={index} 
                                    onClick={() => switchEntity(item)}
                                >{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.infoWrapper}>
                    {
                        items.length >= 1 && items.map((item, index) => {
                            return (
                                <div>item.name</div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default AdminPage;