import { About } from "./components/About";
import { Areas } from "./components/Areas";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Position } from "./components/Position";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Ticker } from "./components/Ticker";
import { WhatsAppFab } from "./components/WhatsAppFab";

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper pb-[4.5rem] sm:pb-0">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Position />
        <Areas />
        <Process />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
