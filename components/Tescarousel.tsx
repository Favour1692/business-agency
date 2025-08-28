"use client";
import { ImQuotesLeft } from "react-icons/im";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const Tescarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <CarouselContent className="">
        {testimonials.map((data) => (
          <CarouselItem key={data.id} className="">
            <Card className="h-full flex flex-col justify-center bg-viridian dark:bg-dimviridian text-graylight">
              <CardContent className="flex flex-col justify-center gap-2 md:pb-2">
                <div className="flex justify-center">
                  <ImQuotesLeft className="text-4xl lg:6xl" />
                </div>
                <p>{data.text}</p>
                <p className="text-right capitalize">{data.client}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 text-viridian bg-graylight dark:text-dimviridian dark:bg-graylight font-semibold" />
      <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-viridian bg-graylight dark:text-dimviridian dark:bg-graylight font-semibold" />
    </Carousel>
  );
};

export default Tescarousel;
