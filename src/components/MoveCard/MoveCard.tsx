import React from 'react';
import { useGetMoveByIdQuery } from '../../store/api/pokemon';
import styles from './MoveCard.module.scss';
import Loader from '../Loader/Loader';

type MoveCardProps = {
  id: number;
}

const MoveCard = ({ id }: MoveCardProps) => {
  const { data, isLoading } = useGetMoveByIdQuery(id);
  return (
    <div className={styles.card}>
      {isLoading && <Loader />}
      {data && (
        <div className={styles.content}>
          <h3 className={styles.title}>
            {data.name.charAt(0).toUpperCase() + data.name.slice((1))}
          </h3>
          <p className={styles.text}>
            {data.flavor_text_entries.find((item: any) => item.language.name === 'en').flavor_text}
          </p>
          <div className={styles.grid}>
            <p className={styles.right}>Type:</p>
            <p className={styles.left}>{data.type.name.toUpperCase()}</p>
            <p className={styles.right}>Power:</p>
            <p className={styles.left}>{data.power ? data.power : 'NULL'}</p>
            <p className={styles.right}>Accuracy:</p>
            <p className={styles.left}>{data.accuracy ? data.accuracy : 'NULL'}</p>
            <p className={styles.right}>Damage class:</p>
            <p className={styles.left}>{data.damage_class.name.toUpperCase()}</p>
            <p className={styles.right}>Effect chance:</p>
            <p className={styles.left}>{data.effect_chance ? data.effect_chance : 'NULL'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoveCard;
