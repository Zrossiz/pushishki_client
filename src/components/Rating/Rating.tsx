import styles from './Rating.module.scss';
import { RatingProps } from './Rating.props';
import { Rating } from 'react-simple-star-rating';

export const RatingComponent = ({ rating, setRating }: RatingProps) => {
    const starsArr = [...Array(5)];
    
    const handleRating = (rate: number) => {
        setRating(rate)
    
        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index);

    
    return (
        <div className={styles.ratingWrapper}>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                /* Available Props */
            />
        </div>
    )
}