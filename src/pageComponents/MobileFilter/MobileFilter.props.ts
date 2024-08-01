import { IAge, IBrand, IDrive, IMobilePriceFilterProps, IVoltage } from '@/types';
import { ChangeEvent } from 'react';

export interface MobileFilterProps {
  priceFilterProps: IMobilePriceFilterProps;
  brandFilter: {
    brands: IBrand[];
    selectedBrands: number[];
    setBrands: (arg0: number[]) => void;
  };
  ageFilter: {
    ages: IAge[];
    selectedAges: number[];
    setAges: (arg0: number[]) => void;
  };
  voltageFilter: {
    voltages: IVoltage[];
    selectedVoltages: number[];
    setVoltages: (arg0: number[]) => void;
  };
  driveFilter: {
    drives: IDrive[];
    selectedDrives: number[];
    setDrives: (arg0: number[]) => void;
  };
  setCatalogFilter: () => void;
  setOpen: (arg0: boolean) => void;
}
