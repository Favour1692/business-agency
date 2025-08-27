import { Button } from "./ui/button";
import Link from "next/link";
import Tescarousel from "@/components/Tescarousel";

const Testimonials = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* text */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div>
              <h2 data-aos="fade-up">what our clients say</h2>
              <h3 data-aos="fade-up" data-aos-delay="100">
                Trusted by businesses of all sizes
              </h3>
            </div>
            <p data-aos="fade-up" data-aos-delay="200">
              We&apos;re proud to have partnered with ambitious brands across
              industries. Here&apos;s what some of them had to say about working
              with us.
            </p>
            <div>
              Want results like these?{" "}
              <Button
                className="btn-secondary"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Let's work together
              </Button>
            </div>
          </div>
          {/* carousel */}
          <div className="relative">
            <Tescarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
