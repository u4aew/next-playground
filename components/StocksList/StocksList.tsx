import { StockPreview } from '../StockPreview';
import styles from './shares.module.scss';
import { serviceStocks } from '@/services';
import { Pagination } from '@/components/StocksList/Pagination';

const ITEMS_PER_PAGE = 25;

export const StocksList = async ({
  searchParams,
}: {
  searchParams: { start: string; end: string };
}) => {
  const start = Number(searchParams.start) || 0;
  const end = Number(searchParams.end) || ITEMS_PER_PAGE;

  const responseShares = await serviceStocks.getList({ start, end });

  const currentPage = Math.floor(start / ITEMS_PER_PAGE) + 1;
  // @ts-ignore
  const totalPages = Math.ceil(responseShares.total / ITEMS_PER_PAGE);

  return (
    <div className={styles.shares}>
      <div className={styles.list}>
        {responseShares?.data.map((item, key) => (
          <div key={key} className={styles.listItem}>
            <StockPreview value={item} />
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
