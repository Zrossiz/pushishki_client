import { withLayout } from "@/layout/Layout";
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import styles from '../../styles/Categories.module.scss';
import axios from 'axios';
import { ICategoryPageProps, ICategoryWithLength } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CategoriesPage = ({ categories }: ICategoryPageProps) => {
    return (
        <>
            <PageTitle counter="6 категорий" />
            <section className={styles.categoriesWrapper}>
                <div className={styles.wrapper}>
                    {
                        categories?.data.map((item, index) => {
                            return (
                                <Link key={item.id} href={`/categories/${item.slug}`}>
                                    <div className={styles.titleWrapper}>{item.name}</div>
                                    <div className={styles.imgWrapper}>
                                        <img 
                                            src={`${process.env.FILESERVER_URL}upload/${item.image}`} 
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
    const categories = await axios.get<ICategoryWithLength>(`${process.env.API_URL}/category`);

    return {
        props: {
            categories: categories.data
        }
    }
}

export default withLayout(CategoriesPage);