import { PriceFilter } from '@/components';
import styles from './Catalog.module.scss';
import { ICatalogProps } from './Catalog.props';

export const Catalog = ({ brands }: ICatalogProps) => {
    return (
        <section className={styles.catalog}>
            <div className={styles.filtersWrapper}>
                <div className={styles.filterWrapper}>
                    <PriceFilter />
                </div>
                <div className={styles.filterWrapper}>
                    <span>Бренд</span>
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
                    </div>
                </div>
            </div>
            <div className={styles.catalogWrapper}>Каталог</div>
        </section>
    )
}