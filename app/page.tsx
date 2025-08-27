import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import Team from "@/components/Team";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Team />
      <Projects />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  );
};

export default page;
