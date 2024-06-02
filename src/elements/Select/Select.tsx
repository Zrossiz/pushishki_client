import { SelectProps } from './Select.props';
import styles from './Select.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { IColor } from '@/types/Color';
import Image from 'next/image';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const Select = ({ setActiveColor, colors, activeColor }: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const selectColor = (color: IColor) => {
    setActiveColor(color);
    setOpen(false);
  };

  return (
    <div className={styles.colorsWrapper}>
      <div className={styles.titleWrapper} onClick={() => setOpen(true)}>
        <div className={styles.title}>Выберите цвет</div>
        <div className={styles.selectIcon}>
          <Image src={'/icons/TopArrow.svg'} width={20} height={20} alt="Выбрать" />
        </div>
      </div>
      {activeColor && <div className={styles.selectedColor}>Текущий цвет: {activeColor.title}</div>}
      {open && (
        <div className={styles.selectWrapper}>
          {colors.map((item) => {
            return item.color ? (
              <div className={styles.optionWrapper} onClick={() => selectColor(item)}>
                <div
                  className={cn(styles.colorWrapper, {
                    [styles.active]: activeColor?.id === item.id,
                  })}
                  style={{ backgroundColor: item.color }}
                  key={item.id}
                ></div>
                <div className={styles.title}>{item.title}</div>
              </div>
            ) : (
              <div className={styles.optionWrapper} onClick={() => selectColor(item)}>
                <div
                  className={cn(styles.colorWrapper, {
                    [styles.active]: item.id === item.id,
                  })}
                  key={item.id}
                >
                  <Image src={`${FILESERVER_URL}/upload/${item.image}`} fill alt={item.title} />
                </div>
                <div className={styles.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
