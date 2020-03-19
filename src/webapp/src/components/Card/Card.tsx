import React, {FC} from 'react';
import {ICard} from './ICard';

interface ICardComponent {
  card: ICard
}

const Card: FC<ICardComponent> = ({card}) => {
  return (
    <div>
      {card.name}
    </div>
  );
};

export default Card;
