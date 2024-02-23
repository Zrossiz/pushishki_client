import Link from "next/link"
import { SliderItemProps } from "./SliderItem.props"
import styles from './SliderItem.module.scss';
import Image from "next/image";

export const SliderItem = ({ product }: SliderItemProps) => {
    const formattedPrice: string = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol' 
    }).format(product.defaultPrice);
    return (
        <Link href="#" className={styles.itemWrapper}>
            <div className={styles.imgWrapper}>
                <Image src={'/sliderImg.png'} width={200} height={150} alt={product.name} />
            </div>
            <div className={styles.descWrapper}>
                <div className={styles.titleWrapper}>
                    {product.name}
                </div>
                <div className={styles.articulWrapper}>
                    <span>Артикул: {product.articul}</span>
                </div>
                <div className={styles.priceWrapper}>
                    от<span> {formattedPrice}</span>
                </div>
            </div>
        </Link>
    )
}