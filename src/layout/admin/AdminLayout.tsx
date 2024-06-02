import { checkUser } from '@/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import cn from 'classnames';
import { AdminLayoutProps } from './AdminLayout.prop';
import Link from 'next/link';
import styles from './AdminLayout.module.scss';
import { Menu } from './Menu/Menu';

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const router = useRouter();
  const [active, setActive] = useState<string>('Дашборд');

  const pagePath = router.asPath.split('/authorization/admin/')[1];

  const entities: { name: string; slug: string }[] = [
    {
      name: 'Дашборд',
      slug: '',
    },
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
      name: 'История покупок',
      slug: 'basket',
    },
    {
      name: 'Цвет',
      slug: 'color',
    },
  ];

  useEffect(() => {
    (async () => {
      const isLogin = await checkUser();
      if (isLogin.message.startsWith('Ошибка')) {
        return router.push('/');
      }
    })();
    for (let i = 0; i <= entities.length; i++) {
      if (entities[i]?.slug === pagePath) {
        setActive(entities[i]?.name);
      }
      if (pagePath === undefined) {
        setActive('Дашборд');
      }
    }
  }, []);

  const switchEntity = async (entity: { name: string; slug: string }) => {
    setActive(entity.name);
  };

  return (
    <>
      <Head>
        <title>Администрирование</title>
      </Head>
      <div className={styles.adminWrapper}>
        <div className={styles.sidebarWrapper}>
          <div className={styles.active}>{active}</div>
          <ul className={styles.list}>
            {entities.map((item, index) => {
              return (
                <li
                  className={cn(styles.item, {
                    [styles.active]: item.name === active,
                  })}
                  key={index}
                  onClick={() => switchEntity(item)}
                >
                  <Link className={styles.link} href={`/authorization/admin/${item.slug}`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.infoWrapper}>{children}</div>
      </div>
      <div className={styles.mobileWrapper}>
        <div className={styles.infoWrapper}>
          {children}
        </div>
        <div className={styles.menuWrapper}>
          <Menu />
        </div>
      </div>
    </>
  );
};
