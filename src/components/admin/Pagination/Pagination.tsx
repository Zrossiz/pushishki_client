import ReactPaginate from "react-paginate";
import { PaginationProps } from "./Pagination.props";
import styles from './Pagination.module.scss';

export const Pagination = ({ curPage, totalPages, setCurPage }: PaginationProps) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => setCurPage(e.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            activeClassName={styles.active}
        />
    );
};
