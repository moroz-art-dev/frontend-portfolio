'use client';

import React, {useEffect} from 'react';

import {useColorMode} from '@chakra-ui/react';

const ColorModeManager: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {colorMode, setColorMode} = useColorMode();

  useEffect(() => {
    const savedColorMode = localStorage.getItem('chakra-ui-color-mode');
    if (savedColorMode && savedColorMode !== colorMode) {
      setColorMode(savedColorMode);
    }
  }, [setColorMode, colorMode]);

  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', colorMode);
  }, [colorMode]);

  return <>{children}</>;
};

export default ColorModeManager;
