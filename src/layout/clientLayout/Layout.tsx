import Head from 'next/head';
import styles from './Layout.module.scss';
import { Manrope } from 'next/font/google';
import cn from 'classnames';
import { ToTop, WhatsApp } from '@/components';
import { AppProgressBar } from 'next-nprogress-bar';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { ILayoutProps } from './Layout.props';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '400'],
  preload: false
});

export const Layout = ({ children, title, description, keyWords }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title ? title : 'Пушишки'}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={description ? description : 'Официальный сайт - Пушишки'}
        />
        <meta property="og:image:src" content="/Logo.png" />
        <meta property="og:image:width" content="968" />
        <meta property="og:image:height" content="504" />
        <meta property="og:title" content="Пушишки - детские товары" />
        <meta property="og:site_name" content="Пушишки - детские товары" />
        <meta name="keywords" content={keyWords} />
        <meta
          property="og:description"
          content={description ? description : 'Официальный сайт - Пушишки'}
        />
      </Head>
      <div className={cn(manrope.className, styles.globalWrapper)}>
        <AppProgressBar color="#fff" height="4px" shallowRouting />
        <div className={styles.header}>
          <Header />
        </div>
        <main className={styles.main}>{children}</main>
        <div className={styles.footer}>
          <Footer />
        </div>
        <div className={styles.staticWrapper}>
          <ToTop />
          <WhatsApp />
        </div>
      </div>
    </>
  );
};
