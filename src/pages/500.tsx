import { HTag } from "@/elements";
import { Layout } from "@/layout/client/Layout";
import styles from '../styles/client/500.module.scss';

const Error500 = () => {
    return (
        <Layout title="Мы скоро все починим!" >
            <div className={styles.wrapper}>
                <HTag tag="h1">Мы скоро все починим!</HTag>
                <p>Загляните к нам позже ^_^</p>
            </div>
        </Layout>
    )
}

export default Error500