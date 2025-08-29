import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* image */}
          <div className="mx-auto lg:mx-0 order-2 lg:order-1">
            <Image
              src="/image1.webp"
              alt="people in an office"
              width={500}
              height={333}
              sizes="(max-width: 767px) 100vw, 500px"
              className="rounded-lg"
              data-aos="zoom-in-right"
            ></Image>
          </div>

          {/* text */}
          <div
            className="flex flex-col gap-4 lg:items-start order-1 lg:order-2"
            data-aos="fade-right"
          >
            <div>
              <h2 data-aos="fade-up" data-aos-delay="100">
                About Us
              </h2>
              <h3 data-aos="fade-up" data-aos-delay="200">
                We&apos;re more than just a business agency
              </h3>
            </div>
            <p data-aos="fade-up" data-aos-delay="300">
              We are a full-service agency specializing in marketing, branding
              and consulting. Our team partners with ambitious businesses to
              build strategies that inspire, campaigns that deliver and brands
              that last. With a mix of creativity and data-driven insights, we
              make sure your business doesn&apos;t just compete but leads.
            </p>
            <div className="text-left">
              <Link href="#services">
                <Button
                  data-aos="fade-left"
                  data-aos-delay="400"
                  className="btn-primary"
                >
                  see what we do
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
