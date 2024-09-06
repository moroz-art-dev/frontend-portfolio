'use client';
import {
  Lora,
  Montserrat_Alternates,
  Poppins,
  Roboto,
  Source_Code_Pro,
} from 'next/font/google';
import {createContext, ReactNode, useContext} from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface FontContextType {
  headingFont: string;
  bodyFont: string;
  specialFont: string;
  alternateFont: string;
  codeFont: string;
}

const FontContext = createContext<FontContextType>({
  headingFont: poppins.style.fontFamily.split(',')[0].trim(),
  bodyFont: roboto.style.fontFamily.split(',')[0].trim(),
  specialFont: lora.style.fontFamily.split(',')[0].trim(),
  alternateFont: montserratAlternates.style.fontFamily.split(',')[0].trim(),
  codeFont: sourceCodePro.style.fontFamily.split(',')[0].trim(),
});

export const FontProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <FontContext.Provider
      value={{
        headingFont: poppins.style.fontFamily,
        bodyFont: roboto.style.fontFamily,
        specialFont: lora.style.fontFamily,
        alternateFont: montserratAlternates.style.fontFamily,
        codeFont: sourceCodePro.style.fontFamily,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
