import Link from 'next/link';
import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Pagination = ({ curPage = 1, totalPages, slug }: PaginationProps) => {
  const router = useRouter();
  const { query } = router;

  const pagesArr = Array.from({ length: totalPages }, (_, index) => index + 1);

  const changePage = (newPage: number) => {
    const newQuery = { ...query, page: String(newPage) };
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      router.push({
        pathname: router.pathname,
        query: newQuery,
      });
    }, 600);
  };

  const prevPage = () => {
    const newQuery = { ...query, page: String(curPage - 1) };
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      router.push({
        pathname: router.pathname,
        query: newQuery,
      });
    }, 600);
  };

  const nextPage = () => {
    const newQuery = { ...query, page: String(curPage + 1) };
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      router.push({
        pathname: router.pathname,
        query: newQuery,
      });
    }, 600);
  };

  const renderPagination = () => {
    const windowSize = 4;
    const windowStart = Math.max(1, curPage - Math.floor(windowSize / 2));
    const windowEnd = Math.min(totalPages, windowStart + windowSize - 1);

    const pages = [];
    for (let i = windowStart; i <= windowEnd; i++) {
        pages.push(
          <li
            className={cn(styles.paginationItem, {
              [styles.active]: i === curPage,
            })}
            key={Math.floor(Math.random() * 1000)}
          >
            <div onClick={() => changePage(i)} className={styles.link}>
              {i}
            </div>
          </li>
        );
    };

    return pages;
  };

  return (
    <ul className={styles.wrapper}>
      <li className={cn(styles.button, styles.prevBtn)}>
        {curPage !== 1 ? (
          <div onClick={() => prevPage()}>
            <Image
              src={'/icons/PaginationArrow.svg'}
              width={15}
              height={30}
              alt="Предыдущая страница"
            />
          </div>
        ) : (
          <div>
            <svg
              width="15"
              height="30"
              viewBox="0 0 15 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.84984 29.45C1.53317 29.45 1.2165 29.3334 0.966504 29.0834C0.483171 28.6 0.483171 27.8 0.966504 27.3167L11.8332 16.45C12.6332 15.65 12.6332 14.35 11.8332 13.55L0.966504 2.68337C0.483171 2.20003 0.483171 1.40003 0.966504 0.916699C1.44984 0.433366 2.24984 0.433366 2.73317 0.916699L13.5998 11.7834C14.4498 12.6334 14.9332 13.7834 14.9332 15C14.9332 16.2167 14.4665 17.3667 13.5998 18.2167L2.73317 29.0834C2.48317 29.3167 2.1665 29.45 1.84984 29.45Z"
                fill="#f1f1f1"
              />
            </svg>
          </div>
        )}
      </li>
      {renderPagination()}
      <li className={styles.button}>
        {curPage !== pagesArr.length ? (
          <div onClick={() => nextPage()}>
            <Image
              src={'/icons/PaginationArrow.svg'}
              width={15}
              height={30}
              alt="Следующая страница"
            />
          </div>
        ) : (
          <div>
            <svg
              width="15"
              height="30"
              viewBox="0 0 15 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.84984 29.45C1.53317 29.45 1.2165 29.3334 0.966504 29.0834C0.483171 28.6 0.483171 27.8 0.966504 27.3167L11.8332 16.45C12.6332 15.65 12.6332 14.35 11.8332 13.55L0.966504 2.68337C0.483171 2.20003 0.483171 1.40003 0.966504 0.916699C1.44984 0.433366 2.24984 0.433366 2.73317 0.916699L13.5998 11.7834C14.4498 12.6334 14.9332 13.7834 14.9332 15C14.9332 16.2167 14.4665 17.3667 13.5998 18.2167L2.73317 29.0834C2.48317 29.3167 2.1665 29.45 1.84984 29.45Z"
                fill="#f1f1f1"
              />
            </svg>
          </div>
        )}
      </li>
    </ul>
  );
};
