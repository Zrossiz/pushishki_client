import Link from "next/link";
import styles from './CategoryNavigation.module.scss';

const categories = [
    {
        name: 'Электромобили',
        slug: 'electromobili'
    },
    {
        name: 'Мототехника',
        slug: 'mototehnika'
    },
    {
        name: 'Велотехника',
        slug: 'velotehnika'
    },
    {
        name: 'Спецтехника',
        slug: 'spectehnika'
    },
    {
        name: 'Для малышей',
        slug: 'dlya-malyshei'
    },
    {
        name: 'Аксессуары',
        slug: 'acsessuary'
    },
]

export const CategoryNavigation = () => {
    return (
        <div className={styles.wrapper}>
            <ul>
                {categories.map((item, index) => (
                    <li key={index}>
                        <Link href={`/categories/${item.slug}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}