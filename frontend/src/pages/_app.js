import Head from 'next/head'
import '@/styles/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog Doowup</title>
      </Head>
      <Component {...pageProps} />
    </>

  )
}
