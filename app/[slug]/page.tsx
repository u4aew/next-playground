import React from 'react';
import { getShares } from '@/actions/shares';

const ItemPage = async () => {
  const shares = await getShares();
  console.log(shares, 'shares');
  return <div>demo</div>;
};

export default ItemPage;
