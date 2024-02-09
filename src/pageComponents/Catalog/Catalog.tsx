import { AvailabilityFilter, BrandFilter, CountryFilter, MaxWeightFilter, PriceFilter, Sort } from '@/components';
import styles from './Catalog.module.scss';
import { ICatalogProps } from './Catalog.props';
import { useState } from 'react';
import { Checkbox, LinkButton } from '@/elements';

export const Catalog = ({ brands, countries }: ICatalogProps) => {

    const [priceRangeFrom, setPriceRangeFrom] = useState<number>(0);
    const [priceRangeTo, setPriceRangeTo] = useState<number>(0);

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
                    <BrandFilter brands={brands} />
                </div>
                <div className={styles.filterWrapper}>
                    <CountryFilter countries={countries} />
                </div>
                <div className={styles.filterWrapper}>
                    <AvailabilityFilter />
                </div>
                <div className={styles.filterWrapper}>
                    <MaxWeightFilter />
                </div>
                <div className={styles.filterWrapper}>
                    <LinkButton element='button' onClick={() => console.log(true)}>
                        Показать
                    </LinkButton>
                </div>
            </div>
            <div className={styles.catalogWrapper}>
                <Sort />
                <div className={styles.listWrapper}></div>
            </div>
        </section>
    )
}