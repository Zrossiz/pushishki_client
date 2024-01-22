import Head from "next/head";
import styles from './Layout.module.scss';
import { ILayoutProps } from "./Layout.props";
import { FunctionComponent } from "react";
import { Manrope, Roboto } from "next/font/google";
import cn from 'classnames';

const manropeFont = Manrope({
    subsets: ["latin"],
    weight: ["500", "400"],
  });

const robotoFont = Roboto({
    weight: ["700"]
})

const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Пушишки</title>
            </Head>
            <div>
                <div className={cn(
                    styles.header, 
                    manropeFont.className,
                    robotoFont.className
                )}></div>
                <main className={styles.main}>
                    {children}
                </main>
                <div className={styles.footer}></div>
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