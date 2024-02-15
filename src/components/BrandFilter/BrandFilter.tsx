import styles from './BrandFilter.module.scss';
import { IBrandFilterProps } from './BrandFilter.props';
import { useState } from 'react';
import { Checkbox } from '@/elements';

export const BrandFilter = ({ brands, selectedBrands }: IBrandFilterProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <span className={styles.span}>Бренд</span>
            <div className={styles.filter}>
                <div className={styles.list}>
                    {
                        open ?
                        brands?.data?.map((item, index) => {
                            return (
                                <Checkbox 
                                    key={item.id} 
                                    name={item.name} 
                                    itemId={item.id}
                                    selectedBrands={selectedBrands}
                                />
                            )
                        }) :
                        brands?.data?.slice(0, 4).map((item, index) => {
                            return (
                                <Checkbox 
                                    key={item.id} 
                                    name={item.name} 
                                    itemId={item.id}
                                    selectedBrands={selectedBrands}
                                />
                            )
                        }) 
                    }
                </div>
                {
                    brands?.length && brands?.length >= 4 
                    ?
                    <div className={styles.openAll} onClick={() => setOpen(!open)}>
                        { open ? 'Скрыть' : 'Показать'}
                    </div>
                    : 
                    null
                }
            </div>
        </> 
    )
}