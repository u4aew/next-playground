import React from 'react';
import styles from './styles.module.scss';
import { ShareIntro } from '@/components/ShareIntro';
import { Button } from '@/components/Button';

const data = {
  brand: { bg: '#1a5ea0', color: 'white' },
};

const ItemPage = async () => {
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
