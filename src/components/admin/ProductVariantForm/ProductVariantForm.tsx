import { HTag } from "@/elements";
import { ProductVariantFormProps } from "./ProductVariant.props";
import styles from './ProductVariantForm.module.scss';
import { useEffect, useState } from "react";
import { IProductVariant } from "@/types";
import { createProductVariant, getAllColors, getProductVariants } from "@/api";
import Image from "next/image";
import { IColor } from "@/types/Color";
import cn from 'classnames';

export const ProductVariantForm = ({ id, name, setOpen, defaultPrice }: ProductVariantFormProps) => {
    const [variants, setVariants] = useState<IProductVariant[]>([]);
    const [colors, setColors] = useState<IColor[]>([]);

    const [selectedColor, setSelectedColor] = useState<number>(1);
    const [price, setPrice] = useState<number>(defaultPrice);

    useEffect(() => {
        (async () => {
            const queryVariants = await getProductVariants(id);
            if (Array.isArray(queryVariants)) {
                setVariants(queryVariants);
            };

            const queryColors = await getAllColors();

            if (Array.isArray(queryColors)) {
                setColors(queryColors);
            }
        })()
    }, []);

    const create = async () => {
        const productVariant = await createProductVariant(id, +selectedColor, price, ['1231']);
        console.log(productVariant)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formAndVariantsWrapper}>
                <HTag tag='h2'>{name}</HTag>
                <div className={styles.columnsWrapper}>
                    <form className={styles.createWrapper}>
                        <div className={styles.titleWrapper}>
                            Создать вариацию
                        </div>
                        <div className={styles.colorsWrapper}>
                            <div className={styles.title}>
                                Выберите цвет
                            </div>
                            {colors.map((item) => {
                                return (
                                    <div 
                                        className={cn(styles.colorWrapper, {
                                            [styles.active]: selectedColor === item.id
                                        })} 
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => setSelectedColor(item.id)}
                                        key={item.id}
                                    ></div>
                                )
                            })}
                        </div>
                        <div className={styles.colorsWrapper}>
                            <div className={styles.title}>
                                Укажите цену
                            </div>
                            <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
                        </div>
                        <button disabled={selectedColor ? false : true} onClick={create}>Опубликовать</button>
                    </form>
                    <div className={styles.variantsWrapper}>
                        <div className={styles.titleWrapper}>
                            Активные вариации
                        </div>
                        <div className={styles.listWrapper}>
                            {variants.map((item: IProductVariant) => {
                                return (
                                    <div className={styles.itemWrapper} key={item.id}>
                                        <div className={styles.colorWrapper} style={{ backgroundColor: item.color }}></div>
                                        <div className={styles.price}>{item.price} ₽</div>
                                        <div className={styles.delete}>
                                            <Image src="/icons/Trash.svg" width={30} height={30} alt={'Удалить'} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};