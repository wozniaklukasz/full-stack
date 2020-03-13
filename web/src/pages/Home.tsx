import React from 'react';
import {useTranslation} from 'react-i18next';

const Home: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div>Home {t('test')}</div>
  )
};

export default Home;