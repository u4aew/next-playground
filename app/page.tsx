import React from 'react';
import { getShares } from '@/actions/shares';
import { ServerSharesList } from '@/components/server/ServerSharesList';
import { FinancialInstrument } from '@/typing';

const Page = async () => {
  const res = await getShares();
  return (
    <div>
      <ServerSharesList
        instruments={res.data.instruments as FinancialInstrument[]}
      />
    </div>
  );
};

export default Page;
