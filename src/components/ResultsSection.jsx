function ResultsSection() {
  const steps = [
    {
      number: "01",
      title: "Explore the Information",
      description:
        "Start by exploring the information available on the website and understand the different sections.",
    },
    {
      number: "02",
      title: "Review the Details",
      description:
        "Read the available details, notices and applicable terms carefully before using any online gaming service.",
    },
    {
      number: "03",
      title: "Use Responsibly",
      description:
        "Follow the applicable rules and use online gaming services responsibly and within the required age limits.",
    },
  ]

  return (
    <section
      id="results"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            How to Get Started
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Follow these simple steps to understand the platform
            and review the available information.
          </p>

        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-50 border border-gray-200 rounded-2xl p-7"
            >

              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-7">
                {step.description}
              </p>

            </div>
          ))}

        </div>

        {/* Notice */}
        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">

          <p className="text-sm sm:text-base text-gray-700 leading-7">
            <span className="font-bold text-gray-900">
              Important:
            </span>{" "}
            Always check the applicable rules, age requirements,
            terms and conditions before participating in any
            online gaming activity.
          </p>

        </div>

      </div>
    </section>
  )
}

export default ResultsSection