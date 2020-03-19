import React from 'react';
import {ICard} from '../Card/ICard';
import {Button, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {getMockCardsPl} from '../../tmpJsonApi';

const cardsList = getMockCardsPl();

// https://tylermcginnis.com/react-router-nested-routes/
const CardsList = ({match}) => {
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
              <Link to={`${match.url}/${card.id}`}>
                <Button variant="primary">link</Button>
              </Link>
            </td>
          </tr>
          : null))}
        </tbody>
      </Table>
    </div>
  );
};

export default CardsList;
