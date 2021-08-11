import { createContext, useState } from 'react';
import { IPropsChildren } from '../interfaces/props.interfaces';
import { ILanguageContext } from '../interfaces/language.interfaces';
import { defaultLanguageState } from '../services/default.state';

const LanguageContext = createContext<Partial<ILanguageContext>>(defaultLanguageState);

export const LanguageProvider = ({ children }: IPropsChildren) => {
  const [language, setLanguage] = useState(defaultLanguageState.language);

  const handleLanguage = (language?: string) => {
    if (!language) return;

    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}> {children}</LanguageContext.Provider>
  );
};


export default LanguageContext;