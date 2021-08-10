import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './index.css';
import App from './App';
import { TranslationProvider } from '@mojang/t-component'
import Translations from './util/Translations';

const ExtraTranslationContext = createContext('en-US')
if(!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en-US')
}

const Root = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang') ?? 'en-US')

  useEffect(() => {
    const changeLang = () => {
      setLang(localStorage.getItem('lang') ?? 'en-US')
      console.log(localStorage.getItem('lang'));
    }

    window.addEventListener('storage', changeLang)
    return () => {
      window.removeEventListener('storage', changeLang)
    }
  }, [localStorage])

  return (
    <ExtraTranslationContext.Provider value={lang}>
      <TranslationProvider translation={Translations[lang] ?? {}}>
        <App />
      </TranslationProvider>
    </ExtraTranslationContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)