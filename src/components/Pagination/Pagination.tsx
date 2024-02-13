import Link from "next/link";
import { PaginationProps } from "./Pagination.props"

export const Pagination = ({ curPage = 1, totalPages, slug }: PaginationProps) => {

    const pagesArr = Array.from({ length: totalPages - 1 }, (_, index) => index + 1);

    return (
        <ul>
            <li>
                <Link href={`${slug}?page=${curPage - 1}`}>prev</Link>
            </li>
            {
                pagesArr.map((page) => {
                    return (
                        <li key={Math.floor(Math.random() * 1000)}>
                            <Link href={`${slug}?page=${page}`}>
                                {page}
                            </Link>
                        </li>
                    )
                })
            }
            <li>
                { curPage !== totalPages - 1 && <Link href={`${slug}?page=${curPage + 1}`}>next</Link>}
            </li>
        </ul>
    )
}