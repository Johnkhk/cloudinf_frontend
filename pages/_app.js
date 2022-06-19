import '../styles/globals.css'
import Layout from '../components/layout'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
