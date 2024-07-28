import {
  AvailabilityFilter,
  CatalogItem,
  MaxWeightFilter,
  Pagination,
  PriceFilter,
  Sort,
  Loader,
  CatalogItemAttract,
  CheckboxFilter,
} from '@/components/client';
import styles from './Catalog.module.scss';
import { ICatalogProps } from './Catalog.props';
import { useEffect, useState } from 'react';
import { LinkButton } from '@/elements';
import { useRouter } from 'next/router';
import React from 'react';
import { IProduct } from '@/types';
import { MobileFilter } from '..';
import { AnimatePresence } from 'framer-motion';

export const Catalog = ({
  brands,
  countries,
  products,
  curPage,
  voltage,
  age,
  drives,
}: ICatalogProps) => {
  const router = useRouter();
  const { query } = router;

  const [mobileFilter, setMobileFilter] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  const [priceRangeFrom, setPriceRangeFrom] = useState<number | undefined>(
    query.priceRangeFrom !== undefined ? +query.priceRangeFrom : undefined,
  );
  const [priceRangeTo, setPriceRangeTo] = useState<number | undefined>(
    query.priceRangeTo !== undefined ? +query.priceRangeTo : undefined,
  );
  const [inStock, setInStock] = useState<boolean>(query.inStock === 'false' ? false : true);
  const [maxLoad, setMaxLoad] = useState<number | undefined>(
    query.maxLoad !== undefined ? +query.maxLoad : undefined,
  );

  const [selectedVoltages, setSelectedVoltages] = useState<number[]>([]);
  const [selectedAges, setSelectedAges] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [selectedDrives, setSelectedDrives] = useState<number[]>([]);

  const setCatalogFilter = () => {
    setMobileFilter(false);
    const newQuery = {
      ...query,
      priceRangeFrom,
      priceRangeTo,
      inStock,
      maxLoad,
      brands: JSON.stringify(selectedBrands),
      ages: JSON.stringify(selectedAges),
      voltages: JSON.stringify(selectedVoltages),
      drives: JSON.stringify(selectedDrives),
    };

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (products) {
      products.length = 0;
    }

    setTimeout(() => {
      router.push({
        pathname: router.pathname,
        query: newQuery,
      });
    }, 400);
  };

  let localStorageFavorites: IProduct[];

  if (typeof window !== 'undefined') {
    localStorageFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  return (
    <section className={styles.catalog}>
      <AnimatePresence>
        {mobileFilter && (
          <MobileFilter
            setOpen={setMobileFilter}
            priceFilterProps={{
              priceRangeFrom,
              setPriceRangeFrom,
              priceRangeTo,
              setPriceRangeTo,
            }}
            availabilityFilter={{
              inStock,
              setInStock,
            }}
            brandFilter={{
              brands,
              selectedBrands,
            }}
            setCatalogFilter={setCatalogFilter}
          />
        )}
      </AnimatePresence>
      <div className={styles.filtersWrapper}>
        <div className={styles.filterWrapper}>
          <PriceFilter
            priceRangeFrom={priceRangeFrom}
            setPriceRangeFrom={setPriceRangeFrom}
            priceRangeTo={priceRangeTo}
            setPriceRangeTo={setPriceRangeTo}
          />
        </div>
        <div className={styles.filterWrapper}>
          {age?.length && age?.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Возраст"
              selectedItems={selectedAges}
              items={age}
              onChange={setSelectedAges}
            />
          )}
        </div>
        <div className={styles.filterWrapper}>
          {drives?.length && drives?.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Привод"
              selectedItems={selectedDrives}
              items={drives}
              onChange={setSelectedDrives}
            />
          )}
        </div>
        <div className={styles.filterWrapper}>
          {voltage?.length && voltage?.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Вольтаж"
              selectedItems={selectedVoltages}
              items={voltage}
              onChange={setSelectedVoltages}
            />
          )}
        </div>
        <div className={styles.filterWrapper}>
          {brands?.length && brands?.data.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Бренды"
              selectedItems={selectedBrands}
              items={Array.isArray(brands?.data) && brands?.data}
              onChange={setSelectedBrands}
            />
          )}
        </div>
        {/* <div className={styles.filterWrapper}>
          <AvailabilityFilter inStock={inStock} setInStock={setInStock} />
        </div> */}
        <div className={styles.filterWrapper}>
          <MaxWeightFilter maxLoad={maxLoad} setMaxLoad={setMaxLoad} />
        </div>
        <div className={styles.filterWrapper}>
          <LinkButton element="button" onClick={() => setCatalogFilter()}>
            Показать
          </LinkButton>
        </div>
      </div>
      <div className={styles.catalogWrapper}>
        <div className={styles.sortWrapper}>
          <Sort />
          <div className={styles.filters} onClick={() => setMobileFilter(!mobileFilter)}>
            Фильтры
            <div className={styles.imgWrapper}>
              <svg
                width="30"
                height="24"
                viewBox="0 0 49 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_283_63)">
                  <path
                    d="M29.3428 25.0435H45.8706C46.697 25.0435 47.3732 25.6696 47.3732 26.4348V27.8261C47.3732 28.5913 46.697 29.2174 45.8706 29.2174H29.3428"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M21.6801 29.2174H2.29745C1.47106 29.2174 0.794922 28.5913 0.794922 27.8261V26.4348C0.794922 25.6696 1.47106 25.0435 2.29745 25.0435H21.6801"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M16.1963 13.913H45.8713C46.6977 13.913 47.3738 14.5391 47.3738 15.3043V16.6956C47.3738 17.4609 46.6977 18.087 45.8713 18.087H16.1963"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M8.30758 18.087H2.29745C1.47106 18.087 0.794922 17.4609 0.794922 16.6956V15.3043C0.794922 14.5391 1.47106 13.913 2.29745 13.913H8.30758"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M39.9355 2.78261H45.8706C46.6969 2.78261 47.3731 3.40869 47.3731 4.17391V5.56522C47.3731 6.33043 46.6969 6.95652 45.8706 6.95652H39.9355"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M32.1227 6.95652H2.29745C1.47106 6.95652 0.794922 6.33043 0.794922 5.56522V4.17391C0.794922 3.40869 1.47106 2.78261 2.29745 2.78261H32.1227"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M25.5867 31.3043C28.0762 31.3043 30.0943 29.4356 30.0943 27.1304C30.0943 24.8252 28.0762 22.9565 25.5867 22.9565C23.0972 22.9565 21.0791 24.8252 21.0791 27.1304C21.0791 29.4356 23.0972 31.3043 25.5867 31.3043Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.0642 20.1739C14.5537 20.1739 16.5718 18.3052 16.5718 16C16.5718 13.6948 14.5537 11.8261 12.0642 11.8261C9.57476 11.8261 7.55664 13.6948 7.55664 16C7.55664 18.3052 9.57476 20.1739 12.0642 20.1739Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M36.1043 9.04347C38.5938 9.04347 40.6119 7.17475 40.6119 4.86956C40.6119 2.56437 38.5938 0.695648 36.1043 0.695648C33.6148 0.695648 31.5967 2.56437 31.5967 4.86956C31.5967 7.17475 33.6148 9.04347 36.1043 9.04347Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_283_63">
                    <rect
                      width="48.081"
                      height="32"
                      fill="white"
                      transform="translate(0.0439453)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : products && products?.length > 0 ? (
          <>
            <div className={styles.listWrapper}>
              {products?.data?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 2 && <CatalogItemAttract type="gift" />}
                    {index === 6 && <CatalogItemAttract type="call" />}
                    <CatalogItem localStorageFavorites={localStorageFavorites} product={item} />
                  </React.Fragment>
                );
              })}
            </div>
            {products?.totalPages && products.totalPages > 1 && (
              <div className={styles.paginationWrapper}>
                <Pagination
                  slug={`/categories/${router.query.slug}`}
                  curPage={curPage}
                  totalPages={products.totalPages}
                />
              </div>
            )}
          </>
        ) : (
          <div className={styles.notFoundProductsWrapper}>
            <div className={styles.notFoundProducts}>
              Сейчас нет товаров по вашему запросу, но вы можете выбрать другой электрокар
              <LinkButton href="/categories" element="link">
                Перейти в категории
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
