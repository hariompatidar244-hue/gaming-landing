import logo from "../assets/goagames-logo.png"

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500"
    >
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="min-h-[620px] py-14 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-50 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-white" />
              Welcome to Goagames
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08]">
              Goa Game
              <span className="block text-yellow-300">
                Lottery
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-blue-50 leading-8">
              Explore Goa Game related information, platform details,
              useful updates and frequently asked questions in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">

              <button
                type="button"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-yellow-400 text-gray-900 font-bold shadow-lg hover:bg-yellow-300 hover:-translate-y-0.5 transition duration-200"
              >
                Register On Goa Game
              </button>

              <a
                href="#faq"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition text-center"
              >
                Learn More
              </a>

            </div>

            {/* Small Info */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-blue-100">

              <span className="flex items-center gap-2">
                ✓ Easy Navigation
              </span>

              <span className="flex items-center gap-2">
                ✓ Mobile Friendly
              </span>

              <span className="flex items-center gap-2">
                ✓ Useful Information
              </span>

            </div>

          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              {/* Glow */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75" />

              {/* Main Card */}
              <div className="relative rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 shadow-2xl">

                <div className="rounded-[1.5rem] bg-white p-8 sm:p-10 min-h-[360px] flex flex-col items-center justify-center">

                  <img
                    src={logo}
                    alt="Goagames"
                    className="w-52 sm:w-60 lg:w-64 h-auto object-contain"
                  />

                  <div className="mt-7 text-center">

                    <h2 className="text-2xl font-bold text-gray-900">
                      Goa Game
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      Explore platform information
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero