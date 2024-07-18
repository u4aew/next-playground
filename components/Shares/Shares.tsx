import { ServerSharePreview } from '../SharePreview';
import styles from './shares.module.scss';
import { serviceShares } from '@/services';
import { Pagination } from '@/components/Shares/Pagination';

const ITEMS_PER_PAGE = 25;

export const Shares = async ({
  searchParams,
}: {
  searchParams: { start: string; end: string };
}) => {
  const start = Number(searchParams.start) || 0;
  const end = Number(searchParams.end) || ITEMS_PER_PAGE; // например, по умолчанию 10 элементов на страницу

  const responseShares = await serviceShares.getList({ start, end });

  const currentPage = Math.floor(start / ITEMS_PER_PAGE) + 1; // вычисляем текущую страницу на основе start и end
  // @ts-ignore
  const totalPages = Math.ceil(responseShares.total / ITEMS_PER_PAGE); // вычисляем общее количество страниц

  return (
    <div className={styles.shares}>
      <div className={styles.list}>
        {responseShares?.data.map((item, key) => (
          <div key={key} className={styles.listItem}>
            <ServerSharePreview value={item} />
          </div>
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={25}
          currentStart={start}
          currentEnd={end}
        />
      </div>
    </div>
  );
};
