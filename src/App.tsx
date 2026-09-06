import { Header } from "./Header";
import { Hero } from "./Hero";
import { MenuSection, MostLoved } from "./MenuSection";
import { ReviewsSection } from "./ReviewsSection";
import { HoursSection, VisitSection } from "./VisitSection";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <MostLoved />
        <ReviewsSection />
        <HoursSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
