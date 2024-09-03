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
      mr={4}
      variant='ghost'
    />
  );
};

export default ThemeSwitcher;
