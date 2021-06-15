import { useRef } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';

import GlobalStyle from 'src/assets/global/style';
import theme from 'src/assets/theme';

Modal.setAppElement('#__next');

function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<null | QueryClient>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
    queryClientRef.current.setDefaultOptions({ queries: { refetchOnWindowFocus: false } });
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
