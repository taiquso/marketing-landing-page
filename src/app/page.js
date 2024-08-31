import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-white rounded-lg lg:py-12">
        <Hero />
        <LogoMarquee />
      </section>
    </>
  );
}
