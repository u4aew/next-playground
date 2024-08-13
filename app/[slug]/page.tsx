import React from 'react';
import styles from './styles.module.scss';
import { ShareIntro } from '@/components/ShareIntro';
import { BuyStock } from '@/components/BuyStock';
import { serviceShares } from '@/services';

const PageStock = async ({ params }: { params: { slug: string } }) => {
  const { data } = await serviceShares.getByTicker(params.slug);
  const { data: dataLastPrice } = await serviceShares.getLastPriceByTicker(
    params.slug,
  );
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        {/*@ts-ignore*/}
        <ShareIntro value={data} />
      </div>
      <div className={styles.side}>
        <BuyStock info={dataLastPrice} />
      </div>
    </div>
  );
};

export default PageStock;
