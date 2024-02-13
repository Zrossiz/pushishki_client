import Link from "next/link";
import { PaginationProps } from "./Pagination.props";
import styles from './Pagination.module.scss';
import Image from "next/image";
import cn from 'classnames';
import { AnimatePresence, motion } from "framer-motion";

export const Pagination = ({ curPage = 1, totalPages, slug }: PaginationProps) => {

    const pagesArr = Array.from({ length: totalPages - 1 }, (_, index) => index + 1);

    return (
        <ul className={styles.wrapper}>
                <AnimatePresence>
                    { curPage !== 1 && 
                        <motion.li
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                         className={cn(styles.button, styles.prevBtn)}
                        >
                            <Link href={`${slug}?page=${curPage - 1}`} scroll={false}>
                                <Image src={'/icons/PaginationArrow.svg'} width={15} height={30} alt="Предыдущая страница" />
                            </Link>
                        </motion.li>
                    }
                </AnimatePresence>
                {
                    pagesArr.map((page) => {
                        return (
                            <li className={cn(styles.paginationItem, {
                                [styles.active]: page === curPage
                            })} key={Math.floor(Math.random() * 1000)}>
                                <Link href={`${slug}?page=${page}`} scroll={false}>
                                    {page}
                                </Link>
                            </li>
                        )
                    })
                }
                <AnimatePresence>
                    { curPage !== totalPages - 1 && 
                        <motion.li 
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.button}
                        >
                            <Link href={`${slug}?page=${curPage + 1}`} scroll={false}>
                                <Image src={'/icons/PaginationArrow.svg'} width={15} height={30} alt="Следующая страница" />
                            </Link>
                        </motion.li>
                    }
                </AnimatePresence>
        </ul>
    )
}