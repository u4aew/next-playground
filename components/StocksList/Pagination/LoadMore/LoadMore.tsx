'use client';

import { useEffect, useRef } from 'react';
import styles from '../pagination.module.scss';
import Link from 'next/link';

interface LoadMoreProps {
  currentStart: number;
  currentEnd: number;
  itemsPerPage: number;
}

export const LoadMore = ({
  currentStart,
  currentEnd,
  itemsPerPage,
}: LoadMoreProps) => {
  const scrollPosition = useRef<number>(0);

  useEffect(() => {
    if (scrollPosition.current > 0) {
      window.scrollTo({
        top: scrollPosition.current,
      });
      scrollPosition.current = 0;
    }
  });

  const handleLoadMoreClick = () => {
    scrollPosition.current = window.scrollY;
  };

  return (
    <Link
      onClick={handleLoadMoreClick}
      className={styles.btn}
      href={`?start=${currentStart}&end=${currentEnd + itemsPerPage}`}
    >
      Show more
    </Link>
  );
};
