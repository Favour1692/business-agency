"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 data-aos="fade-up">trusted by businesses like yours</h2>
        <h3 data-aos="fade-up" data-aos-delay="100">
          Proven Results, Backed by Numbers
        </h3>
        <p className="mt-2" data-aos="fade-up" data-aos-delay="200">
          We don&apos;t just talk strategy. We deliver measurable growth for
          every client we work with.
        </p>
        <div className="w-full md:w-[80%] px-4 pt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-lg">
            <CountUp
              end={120}
              duration={4}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-viridian dark:text-dimviridian"
            />
            +
            <p data-aos="fade-up" data-aos-delay="100">
              Brands Transformed
            </p>
          </div>
          <div className="text-lg">
            <CountUp
              end={15}
              duration={4}
              delay={1}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-viridian dark:text-dimviridian"
            />
            +
            <p data-aos="fade-up" data-aos-delay="100">
              Industries Served
            </p>
          </div>
          <div className="text-lg">
            <CountUp
              end={300}
              duration={4}
              delay={2}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-viridian dark:text-dimviridian"
            />
            +
            <p data-aos="fade-up" data-aos-delay="100">
              Projects Completed
            </p>
          </div>
          <div className="text-lg">
            <CountUp
              end={95}
              duration={4}
              delay={3}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-viridian dark:text-dimviridian"
            />
            %
            <p data-aos="fade-up" data-aos-delay="100">
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
