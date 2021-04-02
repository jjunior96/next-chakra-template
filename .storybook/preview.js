import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ChakraProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

