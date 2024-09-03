export const Tag = {
  baseStyle: {
    fontWeight: 'bold',
    color: 'var(--text-color)',
    bg: 'var(--accent-color)',
    borderRadius: 'full',
    px: '3',
    py: '1',
    _hover: {
      bg: 'var(--primary-color)',
    },
  },
  variants: {
    subtle: {
      bg: 'var(--secondary-color)',
      color: 'var(--text-color)',
    },
    solid: {
      bg: 'var(--primary-color)',
      color: 'var(--background-color)',
    },
    outline: {
      border: '2px solid',
    },
  },
};
