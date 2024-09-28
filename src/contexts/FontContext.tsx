'use client';
import {Montserrat, Nunito, Source_Code_Pro} from 'next/font/google';
import {createContext, ReactNode, useContext} from 'react';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

interface FontContextType {
  headingFont: string;
  bodyFont: string;
  alternateFont: string;
  codeFont: string;
}

const FontContext = createContext<FontContextType>({
  headingFont: montserrat.style.fontFamily.split(',')[0].trim(),
  bodyFont: nunito.style.fontFamily.split(',')[0].trim(),
  codeFont: sourceCodePro.style.fontFamily.split(',')[0].trim(),
  alternateFont: 'Styrene A Web',
});

export const FontProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <FontContext.Provider
      value={{
        headingFont: montserrat.style.fontFamily,
        bodyFont: nunito.style.fontFamily,
        alternateFont: 'Styrene A Web',
        codeFont: sourceCodePro.style.fontFamily,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
