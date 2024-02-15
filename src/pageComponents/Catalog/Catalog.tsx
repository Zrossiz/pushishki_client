import { AvailabilityFilter, BrandFilter, CatalogItem, CountryFilter, MaxWeightFilter, Pagination, PriceFilter, Sort } from '@/components';
import styles from './Catalog.module.scss';
import { ICatalogProps } from './Catalog.props';
import { useState } from 'react';
import { LinkButton } from '@/elements';
import { CatalogItemAttract } from '@/components/CatalogItemAttract/CatalogItemAttract';
import { useRouter } from 'next/router';
import React from 'react';

export const Catalog = ({ brands, countries, products, curPage }: ICatalogProps) => {

    const router = useRouter();
    const { query } = router;

    const [priceRangeFrom, setPriceRangeFrom] = useState<number | undefined>(query.priceRangeFrom !== undefined ? +query.priceRangeFrom : undefined);
    const [priceRangeTo, setPriceRangeTo] = useState<number | undefined>(query.priceRangeTo !== undefined ? +query.priceRangeTo : undefined);
    const [inStock, setInStock] = useState<boolean>(query.inStock === 'false' ? false : true);
    const [maxLoad, setMaxLoad] = useState<number | undefined>(query.maxLoad !== undefined ? +query.maxLoad : undefined);

    let selectedCountries: number[] = [];
    let selectedBrands: number[] = [];

    const setCatalogFilter = () => {
        const newQuery = { ...query, 
            priceRangeFrom,
            priceRangeTo,
            inStock,
            maxLoad,
            selectedBrands: JSON.stringify(selectedBrands),
            selectedCountries: JSON.stringify(selectedCountries)
        };

        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            router.push({
                pathname: router.pathname,
                query: newQuery
              });
        }, 600);
    }

    return (
        <section className={styles.catalog}>
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
                    <BrandFilter selectedBrands={selectedBrands} brands={brands} />
                </div>
                <div className={styles.filterWrapper}>
                    <CountryFilter selectedCountries={selectedCountries} countries={countries} />
                </div>
                <div className={styles.filterWrapper}>
                    <AvailabilityFilter 
                        inStock={inStock}
                        setInStock={setInStock}
                    />
                </div>
                <div className={styles.filterWrapper}>
                    <MaxWeightFilter
                        maxLoad={maxLoad}
                        setMaxLoad={setMaxLoad}
                    />
                </div>
                <div className={styles.filterWrapper}>
                    <LinkButton element='button' onClick={() => setCatalogFilter()}>
                        Показать
                    </LinkButton>
                </div>
            </div>
            <div className={styles.catalogWrapper}>
                <Sort />
                <div className={styles.listWrapper}>
                    {
                        products?.data?.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {index === 2 &&
                                        <CatalogItemAttract type='gift' />
                                    }
                                    {index === 6 &&
                                        <CatalogItemAttract type='call' />
                                    }
                                    <CatalogItem 
                                        id={item.id}
                                        image={`/${item.image}`}
                                        price={item.defaultPrice}
                                        articul={item.articul}
                                        name={item.name}
                                        availibility={item.inStock}
                                    />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                {products?.totalPages && products.totalPages > 1 && 
                    <div className={styles.paginationWrapper}>
                        <Pagination 
                            slug={`/categories/${router.query.slug}`} 
                            curPage={curPage} 
                            totalPages={products.totalPages} 
                        />
                    </div>
                }
            </div>
        </section>
    )
}