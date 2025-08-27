import Image from "next/image";

const Team = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* text */}
          <div className="flex flex-col items-center lg:items-start">
            <div>
              <h2 data-aos="fade-up">meet our team</h2>
              <h3 data-aos="fade-up" data-aos-delay="100">
                experts dedicated to your success
              </h3>
            </div>
            <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
              We are more than consultants, we&apos;re your growth partners. Our
              team blends strategy, creativity, and experience to help you
              achieve results that last. We work together to turn ideas into
              impactful solutions that help your brand stand out and make your
              business vision a reality.
            </p>
          </div>
          {/* image */}
          <div className="mx-auto lg:mx-0">
            <Image
              src="/team.webp"
              alt="team posing in an office"
              width={500}
              height={333}
              className="rounded-lg"
              data-aos="zoom-in-left"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
