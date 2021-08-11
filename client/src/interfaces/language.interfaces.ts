interface ILanguageContext {
  language?: string;
  translates?: object;
  handleLanguage?: (language?: string) => void;
}

export type { ILanguageContext };