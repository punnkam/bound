import { extendTheme } from '@chakra-ui/react';
import '@fontsource/chakra-petch';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#F9F9FC',
      },
    }),
  },
  fonts: {
    heading: 'Chakra Petch',
    body: 'Chakra Petch',
  },
});

export default theme;
