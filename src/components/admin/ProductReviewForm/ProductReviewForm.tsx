import { ProductReviewFormProps } from "./ProductReviewForm.props";
import styles from './ProductReview.module.scss';
import { HTag } from "@/elements";
import { useEffect, useState } from "react";
import { IReview, IReviewWithLength } from "@/types";
import { getReviewsProduct } from "@/api";

export const ProductReviewForm = ({ setOpen, product }: ProductReviewFormProps) => {
    const [reviews, setReviews] = useState<IReview[]>();

    useEffect(() => {
        (async () => {
            const queryReviews: IReview[] | { message: string } = await getReviewsProduct(product.id, true);
            if (Array.isArray(queryReviews)) {
                setReviews(queryReviews);
            };
            console.log(reviews);
        })();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                <HTag tag="h2">Отзывы {product.name}</HTag>
                <div className={styles.listWrapper}>
                    {
                        reviews?.map((item) => {
                            const activeColor: string = item.active ? 'green' : 'red';
                            return (
                                <div key={item.id} className={styles.itemWrapper}>
                                    <div className={styles.nameWrapper}>
                                        Имя: {item.username}
                                    </div>
                                    <div className={styles.ratingWrapper}>
                                        Оценка: {item.rating}
                                    </div>
                                    <div className={styles.activeWrapper} style={{ backgroundColor: activeColor }}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};