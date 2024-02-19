import { getAccessories, getBestsellers } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Form, Questions, Slider } from "@/pageComponents";
import { IProductCardPageProps } from "@/types";
import styles from '../../../../styles/Card.module.scss';
import { Breadcrumbs } from "@/components";
import { useRouter } from "next/router";
import { HTag } from "@/elements";

const ProductCardPage = ({ bestSellers, acessories }: IProductCardPageProps) => {
    const router = useRouter();
    console.log(router);
    return (
        <>  
            <div className={styles.itemDescriptionWrapper}>
                <div className={styles.galleryAndDescriptionWrapper}>1</div>
                <div className={styles.aboutItemWrapper}>
                    <div className={styles.breadcrumbsWrapper}>
                        <Breadcrumbs breadcrumbs={[
                            {
                                name: 'Главная',
                                path: '/'
                            },
                            {
                                name: 'Категории',
                                path: '/categories'
                            },
                            {
                                name: 'Каталог',
                                path: `/categories/${router.query.slug}`
                            }
                        ]}/>
                    </div>
                    <div className={styles.titleWrapper}>
                        <HTag tag="h1">Электромобиль</HTag>
                    </div>
                </div>
            </div>
            <Slider title="Аксессуары" products={acessories?.data} />
            <Slider title="Лучшие предложения" products={bestSellers} />
            <Questions />
            <Form />
        </>
    )
};

export default withLayout(ProductCardPage);

export const getServerSideProps = async () => {
    const bestSellers = await getBestsellers();
    const acessories = await getAccessories();

    return {
        props: {
            acessories,
            bestSellers
        }
    }
}