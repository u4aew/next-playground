import React from 'react';
import styles from './styles.module.scss';
import { IFinancialInstrument } from '@/typing';
import { generateGradient } from '@/utils';

type Props = {
  value: IFinancialInstrument;
};

export const ShareIntro = ({ value }: Props) => {
  return (
    <div
      style={{
        background: generateGradient(value.brand.bg),
        color: value.brand.color,
      }}
      className={styles.intro}
    >
      <div className={styles.title}>APPLE</div>
      <div className={styles.info}>
        <div className={styles.item}>
          <div className={styles.subtitle}>Profitability for six months</div>
          <div className={styles.desc}>6%</div>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>Sector</div>
          <div className={styles.desc}>Financial sector</div>
        </div>
      </div>
    </div>
  );
};
