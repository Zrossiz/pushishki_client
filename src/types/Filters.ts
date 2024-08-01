import { ChangeEvent } from 'react';

export interface IMobilePriceFilterProps {
  priceRangeFrom: number | undefined;
  setPriceRangeFrom: (arg0: ChangeEvent<HTMLInputElement>) => void;
  priceRangeTo: number | undefined;
  setPriceRangeTo: (arg0: ChangeEvent<HTMLInputElement>) => void;
}
