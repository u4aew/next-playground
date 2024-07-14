import React from 'react';
import { Shares } from '@/components/Shares';

import styles from './page.module.scss';

export default function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return <Shares searchParams={searchParams} />;
}
