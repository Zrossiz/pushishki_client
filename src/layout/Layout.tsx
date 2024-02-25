import Head from "next/head";
import styles from './Layout.module.scss';
import { ILayoutProps } from "./Layout.props";
import { FunctionComponent, useEffect } from "react";
import { Manrope, Roboto } from "next/font/google";
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { ToTop, WhatsApp } from "@/components";
import { AppProgressBar } from "next-nprogress-bar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "400"],
  preload: false
});

const Layout = ({ children }: ILayoutProps): JSX.Element => {  
  return (
    <>
      <Head>
        <title>Пушишки</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <div className={cn(
        manrope.className,
        styles.globalWrapper
      )}>
        <AppProgressBar color="#fff" height="4px" shallowRouting />
        <div className={styles.header}>
          <Header />
        </div>
        <main className={styles.main}>
          {children}
        </main>
        <div className={styles.footer}>
          <Footer />
        </div>
        <div className={styles.staticWrapper}>
          <ToTop />
          <WhatsApp />
        </div>
      </div>
    </>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};