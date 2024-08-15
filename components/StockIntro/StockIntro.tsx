import React from 'react';
import styles from './styles.module.scss';
import { generateGradient } from '@/utils';

export const StockIntro = ({ data }: any) => {
  return (
    <div
      style={{
        background: generateGradient(data.brand.logoBaseColor),
        color: data.brand.textColor,
      }}
      className={styles.intro}
    >
      <div className={styles.title}>{data.name}</div>
      <div className={styles.info}>
        <div className={styles.item}>
          <div className={styles.subtitle}>Country</div>
          <div className={styles.desc}>{data.countryOfRisk}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>Sector</div>
          <div className={styles.desc}>{data.sector}</div>
        </div>
      </div>
    </div>
  );
};
