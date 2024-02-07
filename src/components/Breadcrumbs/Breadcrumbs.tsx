import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';
import { BreadcrumbsProps } from './Breadcrumbs.props';

export const Breadcrumbs = ({breadcrumbs}: BreadcrumbsProps) => {
    return (
        <ul>
            {
                breadcrumbs.map((item, index) => {
                    return (
                        <li className={styles.linkWrapper} key={index}>
                            <Link className={styles.link} href={item.path}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}