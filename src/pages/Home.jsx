import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import GameCards from "../components/GameCards"
import InfoSection from "../components/InfoSection"
import ResultsSection from "../components/ResultsSection"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* Hero Section */}
        <Hero />

        {/* Why Choose Goa Game */}
        <GameCards />

        {/* Responsible Gaming */}
        <InfoSection />

        {/* How It Works */}
        <ResultsSection />

        {/* FAQ */}
        <FAQ />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home