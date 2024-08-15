import React from 'react';
import styles from './styles.module.scss';
import { generateGradient } from '@/utils';

export const ShareIntro = ({ value }: any) => {
  console.log(value, 'value')
  return (
    <div
      style={{
        background: generateGradient(value.brand.logoBaseColor),
        color: value.brand.textColor,
      }}
      className={styles.intro}
    >
      <div className={styles.title}>{value.name}</div>
      <div className={styles.info}>
        <div className={styles.item}>
          <div className={styles.subtitle}>Country</div>
          <div className={styles.desc}>{value.countryOfRisk}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>Sector</div>
          <div className={styles.desc}>{value.sector}</div>
        </div>
      </div>
    </div>
  );
};
