import React from 'react';
import { getShares } from '@/actions/shares';
import { SharesList } from '@/components/SharesList';
import { FinancialInstrument } from '@/typing';

const Page = async () => {
  const res = await getShares();
  return (
    <div>
      <SharesList instruments={res.data.instruments as FinancialInstrument[]} />
    </div>
  );
};

export default Page;
