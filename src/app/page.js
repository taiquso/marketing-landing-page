import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-white rounded-lg lg:py-12">
        <Hero />
        <LogoMarquee />
        <Features />
      </section>
    </>
  );
}
