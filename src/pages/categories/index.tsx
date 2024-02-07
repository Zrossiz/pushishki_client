import { withLayout } from "@/layout/Layout";
import { Quiz, Slider } from "@/pageComponents";
import styles from '../../styles/Categories.module.scss';

const CategoriesPage = () => {
    return (
        <>
            <section className={styles.titleWrapper}></section>
            <section className={styles.categoriesWrapper}></section>
            <Slider title="Лучшие предложения" />
            <Quiz />
        </>
    )
}

export default withLayout(CategoriesPage);