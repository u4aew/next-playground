import React from 'react';
import styles from './styles.module.scss';

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
  const formattedDate = new Date(info.time).toLocaleString();
  const formattedPrice = parseFloat(
    `${info.price.units}.${info.price.nano / 1e9}`,
  ).toFixed(2);

  return (
    <div className={styles.box}>
      <div>Date: {formattedDate}</div>
      <div>Price: {formattedPrice}</div>
      <button className={styles.buyButton}>Buy</button>
    </div>
  );
};
