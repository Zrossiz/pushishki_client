export interface ICheckboxProps {
    name: string,
    inStock?: boolean,
    setInStock?: (arg0: boolean) => void,
    itemId?: number,
    selectedBrands?: number[], 
    countryId?: number,
    selectedCountries?: number[], 
    type?: 'country' | 'brand'
}