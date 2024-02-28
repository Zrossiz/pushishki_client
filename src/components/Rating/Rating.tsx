import styles from './Rating.module.scss';
import { RatingProps } from './Rating.props';
import { Rating } from 'react-simple-star-rating';

export const RatingComponent = ({ rating, setRating }: RatingProps) => {    
    const handleRating = (rate: number) => {
        setRating(rate)
    }

    return (
        <div className={styles.ratingWrapper}>
            <Rating
                onClick={handleRating}
            />
        </div>
    )
}