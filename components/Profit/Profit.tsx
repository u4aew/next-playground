import React, { FC } from 'react';
import styles from './styles.module.scss';

interface CandleData {
  open: { units: string; nano: number };
  high: { units: string; nano: number };
  low: { units: string; nano: number };
  close: { units: string; nano: number };
  volume: string;
  time: string;
  isComplete: boolean;
  candleSource: string;
}

interface ReturnPercentageProps {
  data: {
    candles: CandleData[];
  };
}

export const Profit: FC<ReturnPercentageProps> = ({ data }) => {
  if (data.candles.length === 0) return null;

  const startPrice = parseFloat(`${data.candles[0].close.units}.${data.candles[0].close.nano}`);
  const endPrice = parseFloat(`${data.candles[data.candles.length - 1].close.units}.${data.candles[data.candles.length - 1].close.nano}`);
  const returnPercentage = ((endPrice - startPrice) / startPrice) * 100;

  const isPositive = returnPercentage >= 0;
  const formattedReturn = `${isPositive ? '+' : ''}${returnPercentage.toFixed(2)}%`;
  const returnColor = isPositive ? 'green' : 'red';

  return (
    <div className={styles.box}>
      <div style={{ color: returnColor }}>{formattedReturn}</div>
    </div>
  );
};
