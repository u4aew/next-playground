import { FC } from 'react';
import { ProfileBalance } from '@/components/Profile/ProfileBalance';

import styles from './profile.module.scss';

export const Profile: FC = () => {
  return <div className={styles.profile}>Balance: <ProfileBalance /></div>
}
