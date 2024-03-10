import { useEffect, useState } from 'react';
import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItem.props';
import getConfig from 'next/config';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const CartItem = ({ product, addToCart, removeFromCart, switchFavorite, localStorageFavorites, }: CartItemProps) => {

    const [hover, setHover] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    
    useEffect(() => {
        const isProductFavorite = localStorageFavorites.some(favorite => favorite.id === product.product.id);
        setIsFavorite(isProductFavorite);
    }, [localStorageFavorites, product.product.id]);
    

    const formattedPrice: string = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol' 
    }).format(product.product.defaultPrice).split(',')[0] + '₽';

    return (
        <li 
            className={styles.wrapper}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={styles.imgWrapper}>
                <Image src={`${FILESERVER_URL}/upload/${product.product.image}`} alt={product.product.name} width={150} height={100} />
            </div>
            <div className={styles.titleColorWrapper}>
                <div className={styles.titleWrapper}>
                    {product.product.name}
                </div>
                {
                    product.color &&
                        <div className={styles.colorWrapper}>
                            Цвет: <span style={{ backgroundColor: product.color }} className={styles.color}></span>
                        </div>
                }
            </div>
            <div className={styles.priceCounterWrapper}>
                <div className={styles.priceWrapper}>
                    {formattedPrice}
                </div>
                <div className={styles.counterWrapper}>
                    <div className={styles.minus} onClick={() => removeFromCart(product.product.id, product.color)}>-</div>
                    <div className={styles.counter}>
                        {product.count}
                    </div>
                    <div className={styles.plus} onClick={() => addToCart(product.product.id, product.color)}>+</div>
                </div>
            </div>
            <AnimatePresence>
                {
                    hover && 
                        <motion.div 
                            initial={{ x: +10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: +10, opacity: 0 }}
                            transition={{ duration: 0.6, }}
                            className={styles.favoriteDeleteWrapper}
                        >
                            <div className={styles.favoriteWrapper} onClick={() => switchFavorite(product.product)}>
                                {
                                    isFavorite ? 
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_102_173)">
                                            <path d="M23.862 1.22266C22.3586 1.24612 20.8881 1.66728 19.5988 2.4436C18.3096 3.21992 17.2473 4.32391 16.5192 5.64408C15.7911 4.32391 14.7288 3.21992 13.4396 2.4436C12.1503 1.66728 10.6798 1.24612 9.17645 1.22266C6.77996 1.32715 4.52209 2.37926 2.8961 4.14914C1.27012 5.91902 0.408201 8.26279 0.498651 10.6684C0.498651 19.7457 15.1254 30.2298 15.7475 30.6747L16.5192 31.2227L17.2909 30.6747C17.913 30.2325 32.5397 19.7457 32.5397 10.6684C32.6302 8.26279 31.7683 5.91902 30.1423 4.14914C28.5163 2.37926 26.2584 1.32715 23.862 1.22266Z" fill="red"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_102_173">
                                            <rect width="32.054" height="32" fill="white" transform="translate(0.499023)"/>
                                            </clipPath>
                                            </defs>
                                        </svg> 
                                    :
                                        <svg stroke='red' width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_102_173)">
                                            <path d="M23.862 1.22266C22.3586 1.24612 20.8881 1.66728 19.5988 2.4436C18.3096 3.21992 17.2473 4.32391 16.5192 5.64408C15.7911 4.32391 14.7288 3.21992 13.4396 2.4436C12.1503 1.66728 10.6798 1.24612 9.17645 1.22266C6.77996 1.32715 4.52209 2.37926 2.8961 4.14914C1.27012 5.91902 0.408201 8.26279 0.498651 10.6684C0.498651 19.7457 15.1254 30.2298 15.7475 30.6747L16.5192 31.2227L17.2909 30.6747C17.913 30.2325 32.5397 19.7457 32.5397 10.6684C32.6302 8.26279 31.7683 5.91902 30.1423 4.14914C28.5163 2.37926 26.2584 1.32715 23.862 1.22266Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_102_173">
                                            <rect width="32.054" height="32" fill="white" transform="translate(0.499023)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                }
                            </div>
                            <div className={styles.deleteWrapper} onClick={() => removeFromCart(product.product.id, product.color, true)}>
                                <Image src={'/icons/Trash.svg'} height={26} width={24} alt="Удалить" />
                            </div>
                        </motion.div>
                }
            </AnimatePresence>
        </li>
    )
}