import React from 'react';
import { Shares } from '@/components/Shares';

import styles from './page.module.scss';

export default function Page({
  searchParams,
}: {
  searchParams: { start: string, end: string };
}) {
  return <Shares searchParams={searchParams} />;
}
