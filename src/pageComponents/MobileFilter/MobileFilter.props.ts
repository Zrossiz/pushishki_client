export interface MobileFilterProps {
  priceFilterProps: {
    priceRangeFrom?: number;
    setPriceRangeFrom: (arg0: number) => void;
    priceRangeTo?: number;
    setPriceRangeTo: (arg0: number) => void;
  };
  availabilityFilter: {
    inStock?: boolean;
    setInStock?: (arg0: boolean) => void;
  };
  setOpen: (arg0: boolean) => void;
}
