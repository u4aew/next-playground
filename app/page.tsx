import React from 'react';
import { Shares } from '@/components/Shares';

export default function Page({
  searchParams,
}: {
  searchParams: { start: string; end: string };
}) {
  return <Shares searchParams={searchParams} />;
}
