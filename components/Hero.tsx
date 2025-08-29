import { herobg, herotexture } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-left md:bg-center"
      style={herobg}
    >
      <div
        className="w-full h-full flex flex-col justify-center items-center bg-charcoal/20"
        style={herotexture}
      >
        <div className="text-center">
          <p className="capitalize text-light">trusted business agency</p>
          <h1 className="text-graylight capitalize">
            We build brands that drive growth
          </h1>
          <p className="text-light">
            We craft tailored solutions in branding, marketing, and strategy to
            help you stand out, connect with your audience, and scale with
            confidence
          </p>
          <div className="flex gap-3 justify-center mt-4">
            <Link href="#contact">
              <Button variant="default" className="btn-secondary">
                Get Started
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="default" className="btn-primary text-graylight">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
