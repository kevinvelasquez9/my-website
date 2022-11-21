import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kevin Velasquez</title>
        <meta
          name="description"
          content="Personal website of Kevin Velasquez, a student at Johns Hopkins University. Previous intern at Google and incoming Software Engineer at Netflix."
          key="desc"
        />
        <meta
          property="og:description"
          content="Personal website of Kevin Velasquez"
          key="ogdesc"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
