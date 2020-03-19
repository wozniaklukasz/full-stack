import React from 'react';
import {useTranslation} from 'react-i18next';
import {getMockCardsPl} from '../tmpJsonApi';
import CardsList from '../components/CardsList/CardsList';

const Home: React.FC = () => {
  // const {t} = useTranslation();
  const cards = getMockCardsPl();

  return (
    <CardsList cardsList={cards} />
  )
};

export default Home;
