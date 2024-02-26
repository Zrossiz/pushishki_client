import { reviews } from '../MainPageReviews/Data';
import styles from './CardReview.module.scss';
import { CardReviewProps } from './CardReview.props';

export const CardReview = ({ review }: CardReviewProps) => {
    const date: Date = new Date(String(review.createdAt).split('T')[0]);
    const stringDate: string = `
        ${date.getDay().toLocaleString().length === 1 ? `0${date.getDay()}` : date.getDay()}
        ${date.getMonth().toLocaleString().length === 1 ? `0${date.getMonth()}` : date.getMonth()} 
        ${date.getFullYear()}
    `
    return (
        <div>
            <div className={styles.nameWrapper}>{review.username}</div>
            <div className={styles.ratingWrapper}>{review.rating}</div>
            <div className={styles.titleWrapper}>{review.title}</div>
            <div className={styles.descriptionWrapper}>{review.description}</div>
            <div className={styles.dateWrapper}>{stringDate}</div>
        </div>
    )
}