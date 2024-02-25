import { HTag } from '@/elements';
import styles from './CardReviews.module.scss';
import { CardreviewsProps } from './CardReviews.props';

export const CardReviews = ({}: CardreviewsProps) => {
    return (
        <section className={styles.cardReviewsWrapper}>
            <div className={styles.titleWrapper}>
                <HTag tag="h2">Отзывы</HTag>
            </div>
            <div className={styles.sliderWrapper}>
                
            </div>
        </section>
    )
}