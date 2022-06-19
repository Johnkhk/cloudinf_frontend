import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Navbar class="sticky top-0 z-50"/> */}
      <main>{children}</main>
      {/* <main class="relative">{children}</main> */}

      <Footer />
    </>
  )
}