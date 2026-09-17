import { useState } from "react"
import logo from "../assets/goagames-logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between gap-2">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="Goagames"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <a
              href="#home"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="#games"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Goa Game
            </a>

            <a
              href="#results"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              FAQ
            </a>

          </nav>

          {/* Desktop Login/Register */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="https://www.goagamea.com/#/login"
              className="px-5 py-2.5 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Login
            </a>

            <a
              href="http://www.goaok.link/#/register?invitationCode=20996340"
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              Register
            </a>

          </div>

          {/* Mobile Login/Register + Menu */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">

            <a
              href="https://www.goagamea.com/#/login"
              className="px-2.5 sm:px-4 py-2 rounded-lg border border-blue-600 text-blue-600 text-xs sm:text-sm font-semibold hover:bg-blue-50 transition whitespace-nowrap"
            >
              Login
            </a>

            <a
              href="http://www.goaok.link/#/register?invitationCode=20996340"
              className="px-2.5 sm:px-4 py-2 rounded-lg bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition shadow-sm whitespace-nowrap"
            >
              Register
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-gray-200 text-gray-700 text-xl sm:text-2xl hover:bg-gray-50 transition"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">

            <nav className="flex flex-col">

              <a
                href="#home"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Home
              </a>

              <a
                href="#games"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Goa Game
              </a>

              <a
                href="#results"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                How It Works
              </a>

              <a
                href="#faq"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                FAQ
              </a>

            </nav>

          </div>
        )}

      </div>

    </header>
  )
}

export default Navbar