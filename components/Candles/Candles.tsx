'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
const Chart = dynamic(() => import('./Chart/Chart'), { ssr: false });

const Candles = ({ data, currency }: { data: any, currency: string }) => {
  return (
    <div className={styles.chart}>
      <Chart data={data} currency={currency} />
    </div>
  );
};

export default Candles;
