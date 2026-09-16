import { useState } from "react"

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Goa Game?",
      answer:
        "Goa Game is presented as an online gaming information platform where visitors can explore available information, updates and general platform details.",
    },
    {
      question: "How can I learn more about Goa Game?",
      answer:
        "You can explore the different sections of this website to understand the available information, general features and important notices.",
    },
    {
      question: "Can I access the website from my mobile?",
      answer:
        "Yes. The website interface is designed to provide a convenient browsing experience across mobile phones, tablets and desktop devices.",
    },
    {
      question: "What should I check before using an online gaming service?",
      answer:
        "Always review the applicable terms and conditions, age requirements, rules and responsible-use information before participating.",
    },
    {
      question: "Is online gaming suitable for everyone?",
      answer:
        "Online gaming may be subject to age and other legal restrictions. Users should follow the laws and requirements applicable to their location.",
    },
    {
      question: "Where can I find important information?",
      answer:
        "Important information can be found throughout the website, including the information, responsible gaming and frequently asked questions sections.",
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Popular Questions About Goa Game
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Find answers to some commonly asked questions and
            understand the important information available on the platform.
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >

                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 px-5 sm:px-6 py-5 text-left hover:bg-gray-50 transition"
                >

                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span
                    className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-medium"
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5">

                    <div className="border-t border-gray-100 pt-4">

                      <p className="text-gray-600 leading-7">
                        {faq.answer}
                      </p>

                    </div>

                  </div>
                )}

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default FAQ