import {FontProvider} from '@contexts/FontContext';
import LanguageProvider from '@contexts/LanguageContext';
import {ThemeProvider} from '@contexts/ThemeContext';

export function Providers({
  cookies,
  children,
}: {
  cookies: string;
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ThemeProvider cookies={cookies}>
        <FontProvider>{children}</FontProvider>{' '}
      </ThemeProvider>
    </LanguageProvider>
  );
}
