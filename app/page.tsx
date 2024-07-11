import React from 'react';
import { getShares } from '@/actions/shares';
import { SharesList } from '@/components/SharesList';
import { FinancialInstrument } from '@/typing';

import styles from './page.module.scss';

const Page = async () => {
  const { data } = await getShares();
  return (
    <div className={styles.page}>
      <SharesList instruments={data.data as FinancialInstrument[]} />
    </div>
  );
};

export default Page;
