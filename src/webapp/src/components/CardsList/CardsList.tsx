import React, {FC} from 'react';
import {ICard} from '../Card/ICard';
import Card from '../Card/Card';
import {Button, Table} from 'react-bootstrap';

interface ICardsListComponent {
  cardsList: ICard[]
}

const CardsList: FC<ICardsListComponent> = ({cardsList}) => {
  return (
    <div className='card-list'>
      <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Class</th>
          <th>Cost</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {cardsList.map((card: ICard, idx: number) => (idx < 99 ?
          <tr key={card.id}>
            <td>{`#${idx}`}</td>
            <td>{card.name}</td>
            <td>{card.cardClass}</td>
            <td>{card.cost}</td>
            <td>
              <a>
                <Button variant="primary">link</Button>
              </a>
            </td>
          </tr>
          : null))}
        </tbody>
      </Table>
    </div>
  );
};

export default CardsList;
