import { useEffect, useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';
import { IBrandWithLength, ICategoryWithLength, ICountryWithLength } from '@/types';
import { getBrands, getCategories, getCountries } from '@/api';

export const ProductForm = ({ setOpen }: ProductFormProps) => {
    const [countries, setCountries] = useState<ICountryWithLength>();
    const [brands, setBrands] = useState<IBrandWithLength>();
    const [categories, setCategories] = useState<ICategoryWithLength>();

    const [selectedCountry, setSelectedCountry] = useState<number>(countries?.data[0].id ?? 1);

    useEffect(() => {
        (async () => {
            const countries = await getCountries();
            const brands = await getBrands();
            const categories = await getCategories();

            if ('data' in countries) {
                setCountries(countries);
            };

            if ('data' in brands) {
                setBrands(brands);
            };

            if ('data' in categories) {
                setCategories(categories);
            };
        })()
    }, []);

    console.log(selectedCountry);

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                <label htmlFor="countries">Выберите страну</label>
                <select name="countries" id="countries" value={selectedCountry} onChange={(e) => setSelectedCountry(+e.target.value)}>
                    {countries?.data.map((item) => {
                        return (
                            <option value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    );
};