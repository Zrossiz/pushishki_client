import { HTag, Input, LinkButton } from '@/elements';
import styles from './BuyOneClick.module.scss';
import { BuyOneClickProps } from './BuyOneClick.props';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { buyOneClick } from '@/api';
import getConfig from 'next/config';
import { InfoPopup } from '..';

const { publicRuntimeConfig } = getConfig();
const { CLIENT_URL } = publicRuntimeConfig;

export const BuyOneClick = ({ product, setOpen }: BuyOneClickProps) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>();

  const postOrder = async () => {
    if (product) {
      const result = await buyOneClick(
        name,
        String(phone),
        product?.name,
        `${CLIENT_URL}/categories/${product.category.slug}/${product.slug}`,
      );
      setOpen(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={() => setOpen(false)}></div>
      <AnimatePresence>
        <motion.div
          className={styles.formWrapper}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.close} onClick={() => setOpen(false)}>
            <Image src="/icons/Close.svg" fill alt="Закрыть" />
          </div>
          <div>
            <HTag tag="h2">Купить в один клик</HTag>
          </div>
          <div className={styles.inputsWrapper}>
            <Input value={name} onChange={setName} placeholder="Имя" type="text" />
            <div className={styles.phoneInputWrapper}>
              <Input value={phone} onChange={setPhone} type="phone" />
            </div>
          </div>
          <div className={styles.sendButtonWrapper}>
            <LinkButton onClick={postOrder} element="button">
              Отправить
            </LinkButton>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
