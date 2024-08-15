import React from 'react';
import styles from './styles.module.scss';
import { Button } from '@/components/Button';

interface Price {
  units: string;
  nano: number;
}

interface PriceInfo {
  figi: string;
  price: Price;
  time: string;
  instrumentUid: string;
  lastPriceType: string;
}

export const BuyStock: React.FC<{ info: PriceInfo }> = ({ info }) => {
  const formattedPrice = parseFloat(
    `${info?.price?.units}.${info?.price?.nano / 1e9}`,
  ).toFixed(2);

  return (
    <div className={styles.box}>
      <div className={styles.price}>Price: {formattedPrice}</div>
      <div className={styles.btn}>
        <Button>Buy</Button>
      </div>
    </div>
  );
};
