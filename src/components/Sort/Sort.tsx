import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Sort.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export const Sort = () => {
  const router = useRouter();

  const settings: string[] = ['Сначала дешевые', 'Сначала дорогие'];

  const [setting, setSetting] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);

  const chooseSetting = (index: number) => {
    setSetting(index);
    setOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      if (!router.query.page) {
        router.push({
          pathname: router.pathname,
          query: { ...router.query, page: '1', sort: `${index}` }
        });
      } else {
        router.push({
          pathname: router.pathname,
          query: { ...router.query, sort: `${index}` }
        });
      }
    }, 200);
  };

  return (
    <div className={styles.sortWrapper}>
      <div className={styles.titleWrapper} onClick={() => setOpen(!open)}>
        <Image src={'/icons/Sort.svg'} width={48} height={48} alt="Сортировать" />
        {settings[setting]}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.sortList}
          >
            {settings.map((item, index) => {
              return (
                <div className={styles.sortOption} key={index} onClick={() => chooseSetting(index)}>
                  {item}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
