'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
const Chart = dynamic(() => import('./Chart/Chart'), { ssr: false });

const Candles = ({ data }: { data: any }) => {
  return (
    <div className={styles.chart}>
      <Chart data={data} />
    </div>
  );
};

export default Candles;
