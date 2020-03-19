// todo: remove it after creating backend

import jsonCardsPl from './json/pl/25770.json';
import {ICard} from './components/Card/ICard';

export const getMockCardsPl = (): ICard[] => {
  return jsonCardsPl;
};

export const getMockCardPl = (cardId: string): ICard => {
  return jsonCardsPl.find(card => card.id === cardId);
};
