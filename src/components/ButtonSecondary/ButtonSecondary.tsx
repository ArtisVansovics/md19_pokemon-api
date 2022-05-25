import React, { FC } from 'react';
import styles from './ButtonSecondary.module.scss';

type ButtonSecondaryProps = {
  title: string
  onClick?: () => void
  disabled?: boolean;
}

const ButtonSecondary:FC<ButtonSecondaryProps> = ({ title, onClick, disabled }) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </button>
);

export default ButtonSecondary;
