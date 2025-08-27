import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/constants";

const FAQ = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-2">
          <h2 data-aos="fade-up">need help?</h2>
          <h3 data-aos="fade-up" data-aos-delay="100">
            frequently asked questions
          </h3>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-[70%] mx-auto"
          defaultValue="item-1"
        >
          {FAQs.map((data) => (
            <AccordionItem key={data.value} value={data.value}>
              <AccordionTrigger data-aos="fade-up" data-aos-delay="200">
                {data.question}
              </AccordionTrigger>
              <AccordionContent className="text-balance">
                <p>{data.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
