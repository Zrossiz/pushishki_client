export interface MobileFilterProps {
  priceFilterProps: {
    priceRangeFrom?: number;
    setPriceRangeFrom: (arg0: number) => void;
    priceRangeTo?: number;
    setPriceRangeTo: (arg0: number) => void;
  };
  setOpen: (arg0: boolean) => void;
}
