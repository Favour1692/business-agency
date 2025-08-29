import { projectCard } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 data-aos="fade-up">our work</h2>
        <h3 data-aos="fade-up" data-aos-delay="100">
          helping brands achieve real results
        </h3>
        <p className="mt-2" data-aos="fade-up" data-aos-delay="200">
          Here are some of the campaigns, strategies and brand stories
          we&apos;ve brought to life. Each project reflects our focus on
          creativity, strategy and measurable growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 py-6">
          {projectCard.map((data) => (
            <Card
              key={data.id}
              className="h-full bg-light dark:bg-darkfont hover:bg-graylight dark:hover:bg-graydark shadow-lg shadow-graydark dark:shadow-none hover:text-ivory flex flex-col justify-center items-center py-3"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <CardContent className="flex flex-col gap-2 items-center">
                <div className="relative h-48 w-full">
                  <Image
                    src={data.image}
                    alt="people working together in an office"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <h3 className="text-base text-viridian dark:text-graylight capitalize">
                  {data.title}
                </h3>
                <p>{data.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link href="#contact">
          <Button className="btn-burgundry">Let&apos;s build together</Button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
