function InfoSection() {
  const points = [
    {
      icon: "🔞",
      title: "Age Requirement",
      description:
        "Online gaming activities may have age restrictions. Always check and follow the applicable legal age requirements.",
    },
    {
      icon: "📖",
      title: "Read the Rules",
      description:
        "Review the applicable terms, conditions and rules carefully before using an online gaming platform.",
    },
    {
      icon: "⚖️",
      title: "Play Responsibly",
      description:
        "Online gaming should be approached responsibly. Avoid spending more time or money than you can afford.",
    },
    {
      icon: "🛡️",
      title: "Stay Informed",
      description:
        "Use reliable information and verify important details before making decisions related to online gaming.",
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Important Information
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Responsible Gaming
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Online gaming should always be approached with awareness
            and responsibility. Please review the applicable rules and
            requirements before participating.
          </p>

        </div>

        {/* Information Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {point.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 leading-7">
                {point.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Notice */}
        <div className="mt-10 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8">

          <h3 className="text-xl font-bold text-gray-900">
            Please Keep Gaming Responsible
          </h3>

          <p className="mt-3 text-gray-600 leading-8">
            Set reasonable limits and take breaks when needed.
            If online gaming becomes difficult to control or starts
            affecting your daily life, consider stopping and seeking
            appropriate support.
          </p>

        </div>

      </div>
    </section>
  )
}

export default InfoSection