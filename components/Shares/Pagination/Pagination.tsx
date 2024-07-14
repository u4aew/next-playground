import Link from 'next/link';
import styles from './pagination.module.scss';

export const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`} className={styles.btn}>
          Previous
        </Link>
      )}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`} className={styles.btn}>
          Next
        </Link>
      )}
    </div>
  );
};
