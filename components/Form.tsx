import { Button } from "./ui/button";
import { formtexture } from "@/constants";

const Form = () => {
  return (
    <form
      action=""
      className="pt-8 pb-6 my-8 px-3 md:px-4 bg-viridian/30 dark:bg-dimviridian/30 dark:text-graylight rounded-xl w-full lg:w-[80%]"
      data-aos="flip-up"
      style={formtexture}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="">
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Enter full name*"
            id="name"
            autoComplete="on"
            required
            className="py-2 w-full border-2 border-burgundry/40 dark:border-dimburgundry/40"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter email address*"
            id="email"
            autoComplete="on"
            required
            className="py-2 w-full border-2 border-burgundry/40 dark:border-dimburgundry/40"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="">
            Phone number
          </label>
          <input
            type="tel"
            placeholder="Enter phone number*"
            id="phone"
            autoComplete="on"
            required
            className="py-2 w-full border-2 border-burgundry/40 dark:border-dimburgundry/40"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            placeholder="Your Message or query..."
            id="message"
            autoComplete="on"
            required
            className="w-full h-auto border-2 border-burgundry/40 dark:border-dimburgundry/40"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col place-content-center pt-6">
        <Button type="submit" className="btn-primary mx-auto">
          Submit form
        </Button>
      </div>
    </form>
  );
};

export default Form;
