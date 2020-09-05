import '../styles/editor.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (<>
    <Head>
      <title>CKEditor 5 Custom + Next.js</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default App