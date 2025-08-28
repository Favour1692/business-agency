import { serviceCard } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section
      id="services"
      className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 data-aos="fade-up">our services</h2>
          <h3 data-aos="fade-up" data-aos-delay="100">
            solutions designed to grow your business
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-6">
          {serviceCard.map((data) => (
            <Card
              key={data.id}
              className="h-auto md:h-[180px] bg-light dark:bg-darkfont hover:bg-graylight dark:hover:bg-graydark shadow-lg shadow-graydark dark:shadow-none hover:text-ivory flex flex-col justify-center items-center py-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent className="flex flex-col gap-2 items-center text-center">
                <div className="text-4xl font-semibold">{data.icon}</div>
                <h3 className="text-base lg:text-lg text-viridian dark:text-dimviridian">
                  {data.title}
                </h3>
                <p>{data.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
