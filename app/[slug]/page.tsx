import React from 'react';
import styles from './styles.module.scss';
import { ShareIntro } from '@/components/ShareIntro';
import { Button } from '@/components/Button';
import { serviceShares } from '@/services';

const data = {
  brand: { bg: '#1a5ea0', color: 'white' },
};

const ItemPage = async ({ params }: { params: { slug: string } }) => {
  const res = await serviceShares.getByTicker(params.slug);
  console.log(res, res)
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        {/*@ts-ignore*/}
        <ShareIntro value={data} />
      </div>
      <div className={styles.side}>
        <div>
          <div>
            <Button>BUY</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
