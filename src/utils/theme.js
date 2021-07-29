// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

const Link = {
  baseStyle: {
    borderRadius: 0,
  },
  variants: {
    active: {
      borderBottom: '2px solid',
      borderColor: 'brand.100',
      color: 'brand.100',
    },
  },
};

const theme = extendTheme({
  components: {
    Link,
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    brand: {
      100: '#F34854',
      300: '#ff2232',
    },
    dark: {
      100: '#121212',
    },
    light: {
      100: '#fefefe',
    },
    cyan: '#41C1CA',
    yellow: '#FFDC3F',
    orange: '#FF9441',
  },
  sizes: {
    '10xl': '100rem',
    '12xl': '110rem',
  },
});

export default theme;
