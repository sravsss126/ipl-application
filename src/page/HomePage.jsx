import Hero from "../components/hero";
import TeamStanding from "../components/TeamStanding";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer"; // ✅ Import the Footer

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/th.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40">
        {" "}
        {/* fixed typo "scree" to "screen" */}
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Hero />
          </div>
          <div className="bg-opacity-90">
            <TeamStanding />
          </div>
          <div className="bg-opacity-90">
            <StatsSection />
          </div>
        </div>
        <Footer /> {/* ✅ Footer placed at the bottom */}
      </div>
    </div>
  );
}
