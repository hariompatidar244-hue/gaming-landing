function GameCards() {
  const features = [
    {
      number: "01",
      title: "Easy to Explore",
      description:
        "Find important platform information through a clean and simple website layout.",
    },
    {
      number: "02",
      title: "Mobile Friendly",
      description:
        "Explore the website comfortably on mobile phones, tablets and desktop devices.",
    },
    {
      number: "03",
      title: "Useful Updates",
      description:
        "Stay informed with available updates, notices and general information.",
    },
    {
      number: "04",
      title: "Important Information",
      description:
        "Review applicable rules, terms, age requirements and responsible-use information.",
    },
  ]

  return (
    <section
      id="games"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Goa Game
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why Choose Goa Game?
          </h2>

          <p className="mt-5 text-gray-600 leading-8 text-base sm:text-lg">
            Explore the platform through a simple interface designed
            to make important information easy to find and understand.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* Number */}
              <div className="flex items-center justify-between">

                <span className="text-4xl font-extrabold text-blue-100 group-hover:text-blue-200 transition">
                  {feature.number}
                </span>

                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg">
                  →
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 leading-7">
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 group-hover:w-16 transition-all duration-300" />

            </div>
          ))}

        </div>

        {/* Bottom Information */}
        <div className="mt-10 rounded-2xl bg-blue-600 p-6 sm:p-8 lg:p-10">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

            <div className="max-w-3xl">

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Explore Goa Game Information
              </h3>

              <p className="mt-3 text-blue-100 leading-7">
                Browse the website to learn more about the platform,
                available information and important guidelines.
              </p>

            </div>

            <a
              href="#faq"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-bold hover:bg-blue-50 transition"
            >
              View FAQ
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default GameCards