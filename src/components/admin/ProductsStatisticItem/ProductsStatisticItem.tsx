import { DurationSelect } from '@/elements';
import styles from './ProductsStatisticItem.module.scss';
import { IProductsStatisticItemProps } from './ProductsStatisticItem.props';
import { useState } from 'react';
import Image from 'next/image';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const ProductsStatisticItem = ({
  name,
  products,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: IProductsStatisticItemProps) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.nameSelectWrapper}>
        <div className={styles.nameWrapper}>{name}</div>
        <div className={styles.selectWrapper}>
          <DurationSelect
            isOpen={openSelect}
            setOpen={setOpenSelect}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
      <div>
        <ul className={styles.resultWrapper}>
          {products.map((item) => {
            return (
              <li className={styles.itemWrapper}>
                <Image
                  src={`${FILESERVER_URL}/upload/${item.image}`}
                  alt={item.name}
                  width={100}
                  height={70}
                />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
