import wrapper from "../store/store";

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
