import { withLayout } from "@/layout/Layout";
import { Form, Questions, Slider } from "@/pageComponents";

const ProductCardPage = () => {
    return (
        <>
            <Slider title="Аксессуары" />
            <Slider title="Лучшие предложения" />
            <Questions />
            <Form />
        </>
    )
};

export default withLayout(ProductCardPage);