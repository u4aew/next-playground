import Link from 'next/link';
import classNames from 'classnames';
import { createPageArray } from '@/utils';
import dynamic from 'next/dynamic';
const LoadMore = dynamic(() => import('./LoadMore'), { ssr: false });
import styles from './pagination.module.scss';

// todo need fix load more

export const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  currentStart,
  currentEnd,
}: {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  currentStart: number;
  currentEnd: number;
}) => {
  const pages = createPageArray({ totalPages, currentPage });

  const calculateStart = (page: number) => (page - 1) * itemsPerPage;
  const calculateEnd = (page: number) => page * itemsPerPage;

  const isActivePage = (page: number) => {
    const pageStart = calculateStart(page);
    const pageEnd = calculateEnd(page);
    return (
      (currentStart >= pageStart && currentStart < pageEnd) ||
      (currentEnd > pageStart && currentEnd <= pageEnd) ||
      (currentStart <= pageStart && currentEnd >= pageEnd)
    );
  };

  return (
    <div className={styles.box}>
      <div className={styles.loadMore}>
        <LoadMore
          currentStart={currentStart}
          currentEnd={currentEnd}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <div className={styles.pagination}>
        <div className={styles.prev}>
          <Link
            href={`?start=${calculateStart(currentPage - 1)}&end=${calculateEnd(currentPage - 1)}`}
            className={classNames(
              styles.link,
              currentPage <= 1 && styles.disabled,
            )}
          >
            Prev
          </Link>
        </div>
        <div className={styles.list}>
          {pages.map((page, index) => {
            if (page === '...') {
              return (
                <div key={index} className={styles.pageNumber}>
                  ...
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  // @ts-ignore
                  href={`?start=${calculateStart(page)}&end=${calculateEnd(page)}`}
                  className={classNames(
                    styles.pageNumber,
                    // @ts-ignore
                    isActivePage(page) && styles.active,
                  )}
                >
                  {page}
                </Link>
              );
            }
          })}
        </div>
        <div className={styles.next}>
          <Link
            href={`?start=${calculateStart(currentPage + 1)}&end=${calculateEnd(currentPage + 1)}`}
            className={classNames(
              styles.link,
              currentPage >= totalPages && styles.disabled,
            )}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};
