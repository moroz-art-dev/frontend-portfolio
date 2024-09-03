export const Button = {
  baseStyle: {
    fontWeight: 'bold',
  },
  variants: {
    ghost: {
      bg: 'transparent',
      border: 'none',
      padding: 0,
      color: 'var(--text-color)',
      _hover: {
        bg: 'transparent',
        color: 'var(--link-hover-color)',
      },
      _active: {
        bg: 'transparent',
        color: 'var(--link-hover-color)',
      },
    },
    outline: {
      bg: 'transparent',
      color: 'var(--link-color)',
      _hover: {
        bg: 'transparent',
        color: 'var(--link-hover-color)',
      },
      _active: {
        bg: 'transparent',
        color: 'var(--link-hover-color)',
      },
    },
    solid: {
      color: 'var(--accent-color)',
      bg: 'var(--link-color)',
      _hover: {
        color: 'var(--accent-hover-color)',
        bg: 'var(--link-hover-color)',
      },
      _active: {
        color: 'var(--accent-active-color)',
        bg: 'var(--link-hover-color)',
      },
    },
  },
};
