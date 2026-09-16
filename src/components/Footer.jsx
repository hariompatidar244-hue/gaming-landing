import logo from "../assets/goagames-logo.png"

function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white">

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center">
              <img
                src={logo}
                alt="Goagames"
                className="w-16 h-16 object-contain"
              />
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-7 max-w-sm">
              Explore Goa Game related information, updates and
              useful details through a simple and easy-to-use website.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#games"
                  className="text-gray-400 hover:text-white transition"
                >
                  Goa Game
                </a>
              </li>

              <li>
                <a
                  href="#results"
                  className="text-gray-400 hover:text-white transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Information */}
          <div>

            <h3 className="text-lg font-bold">
              Information
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Disclaimer
                </a>
              </li>

            </ul>

          </div>

          {/* Important Notice */}
          <div>

            <h3 className="text-lg font-bold">
              Important Notice
            </h3>

            <p className="mt-5 text-sm text-gray-400 leading-7">
              Information provided on this website is for general
              informational purposes. Users should check applicable
              laws, rules, age requirements and terms before using
              any online gaming service.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 Goagames. All rights reserved.
            </p>

            <p className="text-sm text-gray-500 text-center">
              For informational purposes only.
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer