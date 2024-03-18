import {
  getAccessories,
  getBestsellers,
  getOneProduct,
  getProductVariants,
  getReviewsProduct,
  postReview
} from '@/api';
import { Layout } from '@/layout/client/Layout';
import { CardReviews, CardVideo, Form, Questions, Slider } from '@/pageComponents';
import { IItemCart, IProduct, IProductCardPageProps } from '@/types';
import styles from '../../../../styles/client/Card.module.scss';
import {
  Breadcrumbs,
  BuyOneClick,
  CardItemGallery,
  FormReview,
  InfoPopup
} from '@/components/client';
import { useRouter } from 'next/router';
import { AddToCartButton, HTag, LinkButton } from '@/elements';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { AnimatePresence } from 'framer-motion';

const ProductCardPage = ({
  bestSellers,
  accessories,
  product,
  productVariants,
  reviews
}: IProductCardPageProps) => {
  const router = useRouter();
  const [activeVariant, setActiveVariant] = useState<number>(0);
  const [openBuyOnClick, setOpenBuyOnClick] = useState<boolean>(false);
  const [openReviewForm, setOpenReviewForm] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [option, setOption] = useState<string>('Описание');

  const [activePrice, setActivePrice] = useState<number>(product?.defaultPrice || 0);

  const [isAdded, setIsAdded] = useState<boolean>(false);

  const formattedPrice: string =
    Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'symbol'
    })
      .format(activePrice)
      .split(',')[0] + '₽';

  const switchActiveVariant = (index: number) => {
    setActiveVariant(index);
    setActivePrice(productVariants?.[index].price || 0);
  };

  let localStorageFavorites: IProduct[];

  if (typeof window !== 'undefined') {
    localStorageFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  useEffect(() => {
    if (localStorageFavorites) {
      for (let i = 0; i < localStorageFavorites?.length; i++) {
        if (localStorageFavorites[i]?.id === product?.id) {
          setIsAdded(true);
          break;
        }
      }
    }
  }, []);

  const addToFavorite = (item?: IProduct) => {
    let favorites: IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites?.length > 0) {
      for (let i = 0; i <= favorites.length; i++) {
        if (favorites[i]?.id === item?.id) {
          setIsAdded(false);
          favorites.splice(i, 1);
          return localStorage.setItem('favorites', JSON.stringify(favorites));
        }
      }
    }

    !isAdded && item && favorites?.push(item);
    setIsAdded(true);
    return localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const addToCart = (item: IProduct) => {
    let cart: IItemCart[] = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cart?.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (
          cart[i]?.color === productVariants?.[activeVariant]?.color &&
          cart[i]?.product.id === item.id
        ) {
          cart[i].count = cart[i].count + 1;
          return localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }

    cart?.push({
      product: item,
      color:
        productVariants && productVariants?.length > 0
          ? productVariants[activeVariant].color
          : undefined,
      count: 1
    });
    return localStorage.setItem('cart', JSON.stringify(cart));
  };

  const sendReview = async () => {
    await postReview(product ? product.id : 1, name, rating, title, description);
    setOpenReviewForm(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2000);

    setName('');
    setRating(0);
    setTitle('');
    setDescription('');
  };

  return (
    <Layout
      title={`${product?.metaTitle} | Пушишки`}
      description={product?.metaDescription}
      keyWords={product?.metaKeyWords}
    >
      <>
        <section className={styles.itemDescriptionWrapper}>
          {openBuyOnClick && <BuyOneClick setOpen={setOpenBuyOnClick} />}
          {openReviewForm && (
            <FormReview
              name={name}
              rating={rating}
              title={title}
              description={description}
              setName={setName}
              setRating={setRating}
              setTitle={setTitle}
              setDescription={setDescription}
              setOpen={setOpenReviewForm}
              sendReview={sendReview}
            />
          )}
          <AnimatePresence>
            {success && (
              <InfoPopup title="Спасибо за отзыв!" description="Он будет виден после модерации" />
            )}
          </AnimatePresence>
          <div className={styles.galleryAndDescriptionWrapper}>
            <div className={styles.galleryWrapper}>
              <CardItemGallery images={productVariants && productVariants[activeVariant]?.images} />
            </div>
            <div className={styles.descriptionWrapper}>
              <div className={styles.titleOptionWrapper}>
                <div className={styles.optionWrapper}>
                  <ul>
                    <li
                      onClick={() => setOption('Описание')}
                      className={cn({
                        [styles.active]: option === 'Описание'
                      })}
                    >
                      Описание
                    </li>
                    <li
                      onClick={() => setOption('Характеристики')}
                      className={cn({
                        [styles.active]: option === 'Характеристики'
                      })}
                    >
                      Характеристики
                    </li>
                  </ul>
                </div>
              </div>
              <span>{option === 'Описание' ? product?.description : product?.characteristics}</span>
            </div>
          </div>
          <div className={styles.aboutItemWrapper}>
            <div className={styles.breadcrumbsWrapper}>
              <Breadcrumbs
                breadcrumbs={[
                  {
                    name: 'Главная',
                    path: '/'
                  },
                  {
                    name: `Категории`,
                    path: `/categories`
                  },
                  {
                    name: 'Каталог',
                    path: `/categories/${router.query.slug}`
                  }
                ]}
              />
            </div>
            <div className={styles.titleWrapper}>
              <HTag tag="h1">{product?.name}</HTag>
            </div>
            <div className={styles.inStockAndRatingWrapper}>
              <div className={styles.rating}>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="D39F38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0489 0.927053C10.3483 0.00574231 11.6517 0.00573993 11.9511 0.927051L13.6942 6.29179C13.828 6.70382 14.212 6.98278 14.6452 6.98278H20.2861C21.2548 6.98278 21.6576 8.22239 20.8738 8.7918L16.3103 12.1074C15.9598 12.362 15.8132 12.8134 15.947 13.2254L17.6902 18.5902C17.9895 19.5115 16.935 20.2776 16.1513 19.7082L11.5878 16.3926C11.2373 16.138 10.7627 16.138 10.4122 16.3926L5.84869 19.7082C5.06498 20.2776 4.0105 19.5115 4.30985 18.5902L6.05296 13.2254C6.18683 12.8134 6.04018 12.362 5.68969 12.1074L1.12616 8.7918C0.342451 8.22239 0.745225 6.98278 1.71395 6.98278H7.35477C7.788 6.98278 8.17196 6.70382 8.30583 6.2918L10.0489 0.927053Z"
                    fill="#D39F38"
                  />
                </svg>
                <span>{product?.rating}</span>
              </div>
              <div className={styles.inStock}>
                {product?.inStock ? (
                  <>
                    <Image
                      src={'/icons/Available.svg'}
                      width={62}
                      height={28}
                      alt="Есть в наличии"
                    />
                    В наличии
                  </>
                ) : (
                  <>
                    <Image
                      src={'/icons/NotAvailable.svg'}
                      width={62}
                      height={28}
                      alt="Нет в наличии"
                    />
                    Нет в наличии
                  </>
                )}
              </div>
            </div>
            <div className={styles.propsWrapper}>
              <ul>
                <li>
                  {product?.articul && (
                    <>
                      Артикул: <span>{product?.articul}</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.brand?.name && (
                    <>
                      Бренд: <span>{product?.brand.name}</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.country?.name && (
                    <>
                      Производитель: <span>{product?.country.name}</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.maximumLoad && (
                    <>
                      Максимальная нагрузка: <span>{product?.maximumLoad} кг</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.battery && (
                    <>
                      Съемный аккумулятор: <span>{product?.battery}</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.gearbox && (
                    <>
                      Редуктор: <span>{product?.gearbox}</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.assembledModelSize && (
                    <>
                      Размер собранной модели: <span>{product?.assembledModelSize}</span>
                    </>
                  )}
                </li>
                <li>
                  {product?.modelSizeInPackage && (
                    <>
                      Размер модели в упаковке: <span>{product?.modelSizeInPackage}</span>
                    </>
                  )}
                </li>
              </ul>
            </div>
            <div className={styles.priceWrapper}>
              Цена: <span>{formattedPrice}</span>
            </div>
            <div className={styles.colorsWrapper}>
              Цвет:{' '}
              {productVariants?.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => switchActiveVariant(index)}
                    className={cn(styles.colorOption, {
                      [styles.active]: index === activeVariant
                    })}
                    style={{ backgroundColor: item?.color }}
                  ></div>
                );
              })}
            </div>
            <div className={styles.buttonsWrapper}>
              <div className={styles.cartWrapper} onClick={() => addToCart(product!)}>
                <AddToCartButton />
              </div>
              <div
                className={cn(styles.favoriteWrapper, {
                  [styles.active]: isAdded
                })}
                onClick={() => addToFavorite(product)}
              >
                <div className={styles.imgWrapper}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 33 32"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_102_173)">
                      <path d="M23.862 1.22266C22.3586 1.24612 20.8881 1.66728 19.5988 2.4436C18.3096 3.21992 17.2473 4.32391 16.5192 5.64408C15.7911 4.32391 14.7288 3.21992 13.4396 2.4436C12.1503 1.66728 10.6798 1.24612 9.17645 1.22266C6.77996 1.32715 4.52209 2.37926 2.8961 4.14914C1.27012 5.91902 0.408201 8.26279 0.498651 10.6684C0.498651 19.7457 15.1254 30.2298 15.7475 30.6747L16.5192 31.2227L17.2909 30.6747C17.913 30.2325 32.5397 19.7457 32.5397 10.6684C32.6302 8.26279 31.7683 5.91902 30.1423 4.14914C28.5163 2.37926 26.2584 1.32715 23.862 1.22266Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_102_173">
                        <rect width="32.054" height="32" transform="translate(0.499023)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className={styles.buyOneClick}>
                <LinkButton onClick={() => setOpenBuyOnClick(true)} element="button">
                  Купить в один клик
                </LinkButton>
              </div>
              <div className={styles.deliveryWrapper}>
                <span>Доставка в пределах МКАД - бесплатно</span>
                <span className={styles.grey}>Доставка за пределами МКАД - 40 рублей за 1 км</span>
              </div>
              <div className={styles.contactsWrapper}>
                Связаться с нами: <a href="">8 (495) 766-07-13</a>
              </div>
            </div>
          </div>
        </section>
        <CardVideo video={product?.video} />
        <CardReviews setOpen={setOpenReviewForm} reviews={reviews} />
        <Slider title="Аксессуары" products={accessories?.data} />
        <Slider title="Лучшие предложения" products={bestSellers} />
        <Questions />
        <Form />
      </>
    </Layout>
  );
};

export default ProductCardPage;

export const getServerSideProps = async (context: { params: { slugProduct: string } }) => {
  const { slugProduct } = context.params;

  const bestSellers = await getBestsellers();
  const accessories = await getAccessories();
  const product = await getOneProduct(slugProduct);
  const productVariants = await getProductVariants('id' in product ? product.id : 1);
  const reviews = await getReviewsProduct('id' in product ? product.id : 1);

  return {
    props: {
      accessories,
      bestSellers,
      product,
      productVariants,
      reviews
    }
  };
};
