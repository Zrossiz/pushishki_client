import { ChangeEvent } from 'react';

export interface IPriceFilterProps {
  priceRangeFrom?: number;
  setPriceRangeFrom: (arg0: ChangeEvent<HTMLInputElement>) => void;
  priceRangeTo?: number;
  setPriceRangeTo: (arg0: ChangeEvent<HTMLInputElement>) => void;
}
