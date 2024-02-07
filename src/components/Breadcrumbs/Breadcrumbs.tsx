import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';
import { BreadcrumbsProps } from './Breadcrumbs.props';
import cn from 'classnames';

export const Breadcrumbs = ({breadcrumbs}: BreadcrumbsProps) => {
    return (
        <ul className={styles.wrapper}>
            {
                breadcrumbs.map((item, index) => {
                    return (
                        <li className={cn(styles.linkWrapper)} key={index}>
                            <Link className={styles.link} href={item.path}>{item.name}</Link>
                            {breadcrumbs.length !== index + 1 && (
                                <div className={styles.dot}></div>
                            )}
                        </li>
                    )
                })
            }
        </ul>
    )
}