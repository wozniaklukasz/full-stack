import React from 'react';
import {getMockCardPl} from '../../tmpJsonApi';
import {ICard} from './ICard';

const Card = ({match}) => {
  const {cardId} = match.params;
  const card: ICard = getMockCardPl(cardId);

  // todo: get locale img from state
  const getCardImage = () => (
    <img alt={card.name} src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${cardId}.png`} />
  );

  return (
    <div>
      <h1>{card.name}</h1>
      {card.text}
      {card.flavor}
      MANA {card.cost}
      ATK {card.attack}
      HP {card.health}
      {getCardImage()}
    </div>
  );
};

export default Card;
