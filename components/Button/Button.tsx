import React from 'react';
import styles from './styles.module.scss';

export const Button = ({ children, ...props }: any) => {
  return <button className={styles.btn} {...props}>{children}</button>;
};
