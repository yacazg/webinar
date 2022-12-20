import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-blue-100 text-lg">
      <div className="bg-[url(https://play.tailwindcss.com/img/grid.svg)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
