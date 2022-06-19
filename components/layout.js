import navbar from './navbar'
import footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <navbar />
      {/* <Navbar class="sticky top-0 z-50"/> */}
      <main>{children}</main>
      {/* <main class="relative">{children}</main> */}

      <footer />
    </>
  )
}