import { getAccessories, getBestsellers } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Form, Questions, Slider } from "@/pageComponents";
import { IProductCardPageProps } from "@/types";

const ProductCardPage = ({ bestSellers, acessories }: IProductCardPageProps) => {
    return (
        <>
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