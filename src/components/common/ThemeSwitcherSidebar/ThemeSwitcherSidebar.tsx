'use client';

import classNames from 'classnames';

import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {Button, ButtonGroup, Icon, Text, useColorMode} from '@chakra-ui/react';

import styles from './ThemeSwitcherSidebar.module.scss';

const ThemeSwitcherSidebar: React.FC = () => {
  const {colorMode, setColorMode} = useColorMode();

  return (
    <ButtonGroup spacing={4} className={styles.buttonGroup}>
      <Button
        variant='outline'
        onClick={() => setColorMode('light')}
        className={classNames(styles.button, {
          [styles.active]: colorMode === 'light',
        })}
      >
        <Text>Light</Text>
        <Icon as={SunIcon} boxSize={3} />
      </Button>
      <Button
        variant='outline'
        onClick={() => setColorMode('dark')}
        className={classNames(styles.button, {
          [styles.active]: colorMode === 'dark',
        })}
      >
        <Text>Dark</Text>
        <Icon as={MoonIcon} boxSize={3} />
      </Button>
    </ButtonGroup>
  );
};

export default ThemeSwitcherSidebar;
