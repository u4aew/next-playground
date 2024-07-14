import { ServerSharePreview } from '../SharePreview';
import styles from './shares.module.scss';
import { serviceShares } from '@/services';
import { Pagination } from '@/components/Shares/Pagination';

export const Shares = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const currentPage = Number(searchParams.page) || 1;
  const responseShares = await serviceShares.getList({ page: currentPage });

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
        <Pagination currentPage={currentPage} totalPages={15} />
      </div>
    </div>
  );
};
