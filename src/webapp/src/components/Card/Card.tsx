import React, {useEffect, useState} from 'react';
import {Card as BCard} from 'react-bootstrap';
import {getCard} from '../../services/card';
import {ICard} from './ICard';

const Card = ({match}) => {
  const {cardId} = match.params;

  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    getCard(cardId).then(card => setCard(card))
  }, [cardId]);

  if (!card) return null;

  return (
    <div>
      <BCard style={{ width: '18rem' }}>
        <BCard.Img variant="top" src={card.imageUrl} />
        <BCard.Body>
          <BCard.Title>{card.name}</BCard.Title>
          <BCard.Text>
            {/*<div dangerouslySetInnerHTML={{ __html: card.text }} />*/}
            {/*<i>{card.flavor}</i>*/}
          </BCard.Text>
        </BCard.Body>
      </BCard>
      <h1></h1>
    </div>
  );
};

export default Card;
