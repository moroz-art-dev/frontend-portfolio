'use client';
import React, {useEffect, useRef} from 'react';

import {Box, useTheme} from '@chakra-ui/react';

import styles from './MainLoader.module.scss';

const MainLoader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {colors} = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const text = 'moroz.art.dev';
    const fontSize = 50;
    const typingSpeed = 100;

    ctx.font = `${fontSize}px 'Roboto Mono', monospace`;
    ctx.textBaseline = 'top';
    ctx.fillStyle = colors.text;

    let index = 0;
    const typeText = () => {
      if (index < text.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(text.slice(0, index + 1), 50, 50);
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        fadeOut();
      }
    };

    const fadeOut = () => {
      let alpha = 1;
      const fadeIntervalId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = alpha;
        ctx.fillText(text, 50, 50);
        alpha -= 0.05;
        if (alpha <= 0) {
          clearInterval(fadeIntervalId);
        }
      }, 50);
    };

    typeText();
  }, [colors.text]);

  return (
    <Box
      className={styles.loaderContainer}
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      bg={colors.primary}
    >
      <canvas ref={canvasRef} width={800} height={200} />
    </Box>
  );
};

export default MainLoader;
