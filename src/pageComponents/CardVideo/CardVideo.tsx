import { LinkButton } from '@/elements';
import styles from './CardVideo.module.scss';
import { CardVideoProps } from './CardVideo.props';

export const CardVideo = ({ video }: CardVideoProps) => {
    return (
        <section className={styles.videoReviewWrapper}>
            <div className={styles.videoWrapper}>
                <iframe className={styles.iframe} src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className={styles.youtubeAttract}>
                <span>
                    Все актуальные обзоры<br />
                    вы сможете найти<br />
                    на нашем<br />
                    YouTube канале!
                </span>
                <LinkButton element="link">Перейти</LinkButton>
            </div>
        </section>
    )
}