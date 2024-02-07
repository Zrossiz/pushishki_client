import { withLayout } from "@/layout/Layout";
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import styles from '../../styles/Categories.module.scss';

const CategoriesPage = () => {
    return (
        <>
            <PageTitle counter="6 категорий" />
            <section className={styles.categoriesWrapper}></section>
            <Slider title="Лучшие предложения" />
            <Quiz />
        </>
    )
}

export default withLayout(CategoriesPage);