import Head from 'next/head'
import '@/styles/style.css'
import Header from '@/layouts/header/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog Doowup</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>

  )
}
