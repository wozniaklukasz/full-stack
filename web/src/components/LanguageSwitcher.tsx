import React, {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../App/appSlice';
import {getLanguage} from '../App/appSelectors';
import { Form } from 'react-bootstrap';

const LanguageSwitcher: React.FC = () => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(getLanguage);

  const handleLanguageChange = useCallback((checked: boolean) => {
    // todo: clean this up - use some enum or something
    dispatch(setLanguage(checked ? 'en' : 'pl'));
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <Form.Check
      type="switch"
      id="custom-switch"
      label={t(selectedLanguage)}
      checked={selectedLanguage === 'en'}
      onChange={e => handleLanguageChange(e.target.checked)}
    />
  )
};

export default LanguageSwitcher;
