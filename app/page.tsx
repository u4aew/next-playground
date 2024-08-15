import React from 'react';
import { StocksList } from '@/components/StocksList';

export default function Page({
  searchParams,
}: {
  searchParams: { start: string; end: string };
}) {
  return <StocksList searchParams={searchParams} />;
}
