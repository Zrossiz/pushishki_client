import { withLayout } from "@/layout/Layout";
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import styles from '../../styles/Categories.module.scss';
import { ICategoryPageProps } from "@/types";
import Link from "next/link";
import { getBestsellers, getCategories } from "@/api";

const CategoriesPage = ({ categories, bestSellers }: ICategoryPageProps) => {

    return (
        <>
            <PageTitle 
                counter={`${categories?.length} категорий`} 
                title={'Категории'} 
                breadcrumbs={[
                    {
                        name: 'Главная',
                        path: '/'
                    }
                ]}
            />
            <section className={styles.categoriesWrapper}>
                <div className={styles.wrapper}>
                    {
                        categories?.data.map((item, index) => {
                            return (
                                <Link key={item.id} href={`/categories/${item.slug}?page=1`}>
                                    <div className={styles.titleWrapper}>{item.name}</div>
                                    <div className={styles.imgWrapper}>
                                        <img 
                                            src={`${process.env.FILESERVER_URL}/upload/${item.image}`} 
                                            alt={item.name} 
                                        />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
            <Slider title="Лучшие предложения" products={bestSellers} />
            <Quiz />
        </>
    )
}

export const getStaticProps = async () => {
    const categories = await getCategories();
    const bestSellers = await getBestsellers();

    return {
        props: {
            bestSellers,
            categories
        }
    }
}

export default withLayout(CategoriesPage);