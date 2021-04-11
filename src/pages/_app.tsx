import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import GlobalStyle from 'src/assets/global/style';
import theme from 'src/assets/theme';
import wrapper from 'src/modules/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
