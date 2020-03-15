import React from 'react';
import './footer.scss';
import {Container} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <div className="footer">
      <Container>
        {t('Footer.content')}
      </Container>
    </div>
  );
}

export default Footer;
