import { getBestsellers } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Form, Questions, Slider } from "@/pageComponents";
import { IProductCardPageProps } from "@/types";

const ProductCardPage = ({ bestSellers }: IProductCardPageProps) => {
    return (
        <>
            <Slider title="Аксессуары" />
            <Slider title="Лучшие предложения" products={bestSellers} />
            <Questions />
            <Form />
        </>
    )
};

export default withLayout(ProductCardPage);

export const getServerSideProps = async () => {
    const bestSellers = await getBestsellers();

    return {
        props: {
            bestSellers
        }
    }
}