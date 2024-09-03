export const Heading = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    xl: {
      fontSize: {base: '2xl', sm: '2xl', md: '3xl', lg: '4xl'},
      lineHeight: '1.2',
      fontWeight: 600,
    },
    lg: {
      fontSize: {base: 'xl', sm: 'xl', md: '2xl', lg: '3xl'},
      lineHeight: '1.33',
      fontWeight: 400,
      fontFamily: 'var(--font-alternate)',
    },
    md: {
      fontSize: {base: 'md', sm: 'md', md: 'lg', lg: '2xl'},
      fontWeight: 400,
      fontFamily: 'var(--font-alternate)',
    },
    sm: {
      fontSize: {base: 'sm', sm: 'sm', md: 'md', lg: 'lg'},
      fontWeight: 400,
      fontFamily: 'var(--font-alternate)',
    },
  },
};
