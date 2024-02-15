import styles from './Checkbox.module.scss';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({ name, inStock, setInStock, itemId, selectedBrands }: ICheckboxProps) => {
    const onChangeBrand = (swithcBoolean: boolean, brandId: number) => {
        if (selectedBrands?.includes(brandId)) {
            const index = selectedBrands.indexOf(brandId);
            if (index > -1) {
              selectedBrands.splice(index, 1);
            }
        } else {
            selectedBrands?.push(brandId);
        }

        if (setInStock) {
            setInStock(swithcBoolean)
        }
        console.log(selectedBrands);
    }
    return (
        <div className={styles.brandWrapper}>
            <label className={styles.label}>
                <input 
                    checked={inStock} 
                    onChange={(e) => onChangeBrand(e.target.checked, itemId)}
                    className={styles.input} 
                    type="checkbox" 
                    name="" 
                    id="" 
                />
                <span>
                    {name}
                </span>
            </label>
        </div>
    )
}