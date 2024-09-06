import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {IconButton, useColorMode} from '@chakra-ui/react';

const ThemeSwitcher: React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <IconButton
      aria-label={
        colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      }
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      style={{padding: '0 1rem'}}
      variant='ghost'
    />
  );
};

export default ThemeSwitcher;
