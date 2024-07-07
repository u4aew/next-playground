import { FinancialInstrument } from '@/typing';
import styles from './styles.module.scss';
type Props = {
  value: FinancialInstrument;
};

export const ServerSharePreview = ({ value }: Props) => {
  return <div className={styles.card}>{value.brand.logoName}</div>;
};
