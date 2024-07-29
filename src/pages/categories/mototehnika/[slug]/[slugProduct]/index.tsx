import {
  getAccessories,
  getBestsellers,
  getOneProduct,
  getProductVariants,
  getReviewsProduct,
} from '@/api';
import { ProductCard } from '@/pageComponents/ProductCard/ProductCard';
import { IProductCardPageProps } from '@/types';

const ProductCardPage = ({
  bestSellers,
  accessories,
  product,
  productVariants,
  reviews,
}: IProductCardPageProps) => {
  return (
    <ProductCard
      bestSellers={bestSellers}
      accessories={accessories}
      product={product}
      productVariants={productVariants}
      reviews={reviews}
    />
  );
};

export default ProductCardPage;

export const getServerSideProps = async (context: { params: { slugProduct: string } }) => {
  const { slugProduct } = context.params;

  const bestSellers = await getBestsellers();
  const accessories = await getAccessories();
  const product = await getOneProduct(slugProduct);
  const productVariants = await getProductVariants('id' in product ? product.id : 1);
  const reviews = await getReviewsProduct('id' in product ? product.id : 1, false);

  return {
    props: {
      accessories,
      bestSellers,
      product,
      productVariants,
      reviews,
    },
  };
};
