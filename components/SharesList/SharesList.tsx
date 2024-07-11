import { IFinancialInstrument } from '@/typing';
import { ServerSharePreview } from '../SharePreview';
import styles from './sharesList.module.scss';

type Props = {
  instruments: IFinancialInstrument[];
};

export const SharesList = ({ instruments }: Props) => {
  return (
    <div>
      <div className={styles.list}>
        {instruments.map((item, key) => (
          <div key={key} className={styles.listItem}>
            <ServerSharePreview value={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
