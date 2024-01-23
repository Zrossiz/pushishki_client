import Link from "next/link";
import styles from './CategoryNavigation.module.scss';
import { ICategory } from "@/types/Category";
import { useEffect } from "react";

const categories: ICategory[] = [
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
                        <Link className={styles.link} href={`/categories/${item.slug}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}