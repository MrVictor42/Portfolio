import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import Portuguese from '../jsons/translations/pt-br.json';
import English from '../jsons/translations/en-us.json';
import Germany from '../jsons/translations/de-de.json';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import consts from '../jsons/consts.json';


export default function languageProvider(props) {
    const [locale, setLocale] = useState('pt-br');
    const [lang, setLang] = useState(Portuguese);

    const changeLanguage = (getLang) => {
        setLocale(getLang)
        switch(getLang) {
            case 'pt-br':
                setLang(Portuguese);
                break;
            case 'en-us':
                setLang(English);
                break;
            case 'de-de':
                setLang(Germany);
                break;
            default: 
                setLang(Portuguese)
        }
    }

    return(
        <IntlProvider locale = { locale } messages = { lang }>
            <Header onChange = { changeLanguage } consts = { consts }/>
            <About country = { locale } />
            <Resume country = { locale } />
            <Portfolio country = { locale } />
            <Footer country = { locale } consts = { consts } />
        </IntlProvider>
    );
}