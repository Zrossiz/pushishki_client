import { ProductReviewFormProps } from "./ProductReviewForm.props";
import styles from './ProductReview.module.scss';
import { HTag } from "@/elements";
import { useEffect, useState } from "react";
import { IReviewWithLength } from "@/types";
import { getReviewsProduct } from "@/api";

export const ProductReviewForm = ({ setOpen, product }: ProductReviewFormProps) => {
    const [reviews, setReviews] = useState<IReviewWithLength>();

    useEffect(() => {
        (async () => {
            const queryReviews: IReviewWithLength | { message: string } = await getReviewsProduct(product.id, true);
            if ('totalPages' in queryReviews) {
                setReviews(queryReviews);
            }
        })();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                <HTag tag="h2">Отзывы {product.name}</HTag>
                <div className={styles.listWrapper}>
                    {
                        reviews?.data.map((item) => {
                            return (
                                <div key={item.id} className={styles.itemWrapper}>
                                    <div className={styles.nameWrapper}>
                                        {item.username}
                                    </div>
                                    <div className={styles.ratingWrapper}>
                                        Оценка: {item.rating}
                                    </div>
                                    <div className={styles.activeWrapper}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};