import { BrandFilter, PriceFilter } from '@/components';
import styles from './Catalog.module.scss';
import { ICatalogProps } from './Catalog.props';
import { useState } from 'react';

export const Catalog = ({ brands }: ICatalogProps) => {

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
                    {/* <span>Бренд</span>
                    <div className={styles.filter}>
                        <ul>
                            {
                                brands?.data?.map((item, index) => {
                                    return (
                                        <li className={styles.brandWrapper}>
                                            <label>
                                                <input type="checkbox" name="" id="" />
                                                {item.name}
                                            </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className={styles.catalogWrapper}>Каталог</div>
        </section>
    )
}