import { ProductListItemProps } from "./ProductListItem.props";
import styles from './ProductListItem.module.scss';
import Image from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.image}>
                <Image fill alt={product.name} src={`${FILESERVER_URL}/upload/${product.image}`} />
            </div>
            <div className={styles.name}>
                {product.name}
            </div>
            <div className={styles.options}>
                <div className={styles.edit}>Редактировать</div>
                <div className={styles.delete}>Удалить</div>
            </div>
        </div>
    );
};