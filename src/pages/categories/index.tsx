import { withLayout } from "@/layout/Layout";
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import styles from '../../styles/Categories.module.scss';
import { ICategoryPageProps } from "@/types";
import Link from "next/link";
import { getCategories } from "@/api";
import { useRouter } from "next/router";

const CategoriesPage = ({ categories }: ICategoryPageProps) => {

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
            <Slider title="Лучшие предложения" />
            <Quiz />
        </>
    )
}

export const getServerSideProps = async () => {
    const categories = await getCategories();

    return {
        props: {
            categories
        }
    }
}

export default withLayout(CategoriesPage);