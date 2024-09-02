import React from 'react';
import styles from './styles.module.scss';
import { Button } from '@/components/Button';
import { Profit } from '@/components/Profit';

export const BuyStock: React.FC<{
  data?: any;
  currency?: string;
  candlesData: any;
}> = ({ data, currency, candlesData }) => {
  const formattedPrice = parseFloat(
    // @ts-ignore
    `${data?.price?.units}.${data?.price?.nano / 1e9}`,
  ).toFixed(2);

  return (
    <div className={styles.box}>
      <div className={styles.price}>
        Price: {currency} {formattedPrice}
      </div>
      <div className={styles.profit}>
        <Profit data={candlesData}></Profit>
      </div>
      <div className={styles.btn}>
        <Button>Buy</Button>
      </div>
    </div>
  );
};
