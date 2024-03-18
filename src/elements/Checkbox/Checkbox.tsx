import styles from './Checkbox.module.scss';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({
  name,
  inStock,
  setInStock,
  itemId,
  countryId,
  selectedBrands,
  selectedCountries,
  type
}: ICheckboxProps) => {
  const onChangeBrand = (swithcBoolean: boolean, brandId: number = 1) => {
    if (selectedBrands?.includes(brandId)) {
      const index = selectedBrands.indexOf(brandId);
      if (index > -1) {
        selectedBrands.splice(index, 1);
      }
    } else {
      selectedBrands?.push(brandId);
    }

    if (setInStock) {
      setInStock(swithcBoolean);
    }
  };

  const onChangeCountry = (swithcBoolean: boolean, countryId: number = 1) => {
    if (selectedCountries?.includes(countryId)) {
      const index = selectedCountries.indexOf(countryId);
      if (index > -1) {
        selectedCountries.splice(index, 1);
      }
    } else {
      selectedCountries?.push(countryId);
    }

    if (setInStock) {
      setInStock(swithcBoolean);
    }
  };

  return (
    <>
      {type === 'country' ? (
        <div className={styles.brandWrapper}>
          <label className={styles.label}>
            <input
              checked={inStock}
              onChange={(e) => onChangeCountry(e.target.checked, countryId)}
              className={styles.input}
              type="checkbox"
              name=""
              id=""
            />
            <span>{name}</span>
          </label>
        </div>
      ) : (
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
            <span>{name}</span>
          </label>
        </div>
      )}
    </>
  );
};
