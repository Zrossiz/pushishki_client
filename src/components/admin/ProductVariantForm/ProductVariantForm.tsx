import { HTag } from "@/elements";
import { ProductVariantFormProps } from "./ProductVariant.props";
import styles from './ProductVariantForm.module.scss';
import { useEffect, useState } from "react";
import { IProductVariant } from "@/types";
import { getProductVariants } from "@/api";
import Image from "next/image";

export const ProductVariantForm = ({ id, name, setOpen }: ProductVariantFormProps) => {
    const [variants, setVariants] = useState<IProductVariant[]>([]);
    useEffect(() => {
        (async () => {
            const queryVariants = await getProductVariants(id);
            if (Array.isArray(queryVariants)) {
                setVariants(queryVariants);
            }
        })()
    }, []);

    console.log(variants);
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formAndVariantsWrapper}>
                <HTag tag='h2'>{name}</HTag>
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
                <div className={styles.createWrapper}>
                    <div className={styles.titleWrapper}>
                        Создать вариацию
                    </div>
                </div>
            </div>
        </div>
    );
};