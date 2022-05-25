import React from 'react';
import styles from './PokemonCard.module.scss';
import Button from '../Button/Button';

type PokemonCardProps = {
  name: string;
  imgUrl: string;
  onClick: () => void;
}

const PokemonCard = ({
  name, imgUrl, onClick,
}: PokemonCardProps) => (
  <div className={styles.card}>
    <img src={imgUrl} alt={name} />
    <h2 className={styles.title}>
      {name.charAt(0).toUpperCase() + name.slice((1))}
    </h2>
    <Button title="Read More" onClick={onClick} />
  </div>
);

export default PokemonCard;
