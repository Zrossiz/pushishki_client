import { withLayout } from "@/layout/Layout";
import styles from '../styles/404.module.scss'; 
import { LinkButton } from "@/elements";
import Link from "next/link";

const Error404 = () => {
    return (
        <section className={styles.wrapper}>
            <h1>Ошибка <span>404</span></h1>
            <div className={styles.desc}>
                неправильно набран адрес, или такой <br />
                страницы на сайте больше не существует  
            </div>
            <div className={styles.linksWrapper}>
                <LinkButton element="link" href="/">На главную</LinkButton>
                <Link className={styles.categoriesLink} href="/categories">В&nbsp;категории</Link>
            </div>
        </section>
    )
};

export default withLayout(Error404);