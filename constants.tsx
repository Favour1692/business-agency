import {
  Nav,
  Social,
  background,
  overlay,
  services,
  projects,
  testimonial,
  faq,
} from "./type";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegLightbulb, FaRegHandshake } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";

export const navdata: Nav[] = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "#about",
    title: "About",
  },
  {
    id: 3,
    href: "#services",
    title: "Services",
  },
  {
    id: 4,
    href: "#projects",
    title: "Projects",
  },
  {
    id: 5,
    href: "#testimonals",
    title: "Testimonials",
  },
  {
    id: 6,
    href: "#contact",
    title: "Contact",
  },
];

export const socials: Social[] = [
  {
    id: 1,
    logo: <FaLinkedinIn />,
    href: "#",
  },
  {
    id: 2,
    logo: <FaSquareXTwitter />,
    href: "#",
  },
  {
    id: 3,
    logo: <FaInstagramSquare />,
    href: "#",
  },
  {
    id: 4,
    logo: <FaFacebook />,
    href: "#",
  },
];

export const herobg: background = {
  backgroundImage: "url('/herobg.webp')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export const contactbg: background = {
  backgroundImage: "url('/contact.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

export const herotexture: overlay = {
  backgroundImage: "url('/dark-geometric.png')",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "repeat",
};
export const formtexture: overlay = {
  backgroundImage: "url('/dark-stripes.png')",
  backgroundBlendMode: "overlay",
  backgroundRepeat: "repeat",
};

export const serviceCard: services[] = [
  {
    id: 1,
    icon: <FaRegLightbulb />,
    title: "Brand Strategy & Identity",
    text: "Build a brand that stands out with a clear identity, strong messaging, and visuals that connect with your audience.",
  },
  {
    id: 2,
    icon: <MdOutlineCampaign />,
    title: "Digital Marketing",
    text: "Reach the right people with SEO, social media, and targeted campaigns that drive measurable results.",
  },
  {
    id: 3,
    icon: <HiOutlineBriefcase />,
    title: "Business Consulting",
    text: "Get expert guidance to uncover opportunities, refine strategies, and achieve sustainable growth.",
  },
  {
    id: 4,
    icon: <BiPencil />,
    title: "Content Creation Strategy",
    text: "Engaging content that tells your story, builds trust,a d attracts the right audience.",
  },
  {
    id: 5,
    icon: <FaRegHandshake />,
    title: "Creative Campaigns",
    text: "Bring your ideas to life with bold, engaging campaigns that inspire action and build awareness.",
  },
  {
    id: 6,
    icon: <FiBarChart2 />,
    title: "Analytics & Growth Optimization",
    text: "Track, measure, and refine your stategies with data-driven insights that maximize performance.",
  },
];

export const projectCard: projects[] = [
  {
    id: 1,
    image: "/branding.webp",
    title: "brand identity for XYZ startup",
    description:
      "Developed a bold brand identity and positioning strategy that helped XYZ attract investors and stand out in a crowded market.",
    tag: "branding",
  },
  {
    id: 2,
    image: "/digital.webp",
    title: "digital marketing campaign for ABC retail",
    description:
      "Launched a social media and SEO campaign that boosted online sales by 45% in just three months.",
    tag: "marketing",
  },
  {
    id: 3,
    image: "/content.webp",
    title: "content strategy for EFG tech",
    description:
      "Designed a content marketing framework that grew EFG's blog traffic by 200% and imporved lead generation.",
    tag: "content strategy",
  },
  {
    id: 4,
    image: "/creative.webp",
    title: "creative awareness campaign for GHI NGO",
    description:
      "Executed a multi-channel awareness campaign that reached over 500K people and built strong community engagement.",
    tag: "campaign",
  },
];

export const testimonials: testimonial[] = [
  {
    id: 1,
    text: "Working with Nexure agency was a game-changer. Their branding strategy gave us a fresh identity and helped us connect with our target audience like never before.",
    client: "__Sarah johnson, founder, XYZ startup",
  },
  {
    id: 2,
    text: "Their digital marketing campaign boosted our sales by 40% in just three months. Professional, creative and results-driven.",
    client: "__Micheal stones, marketing manager, ABC Retail",
  },
  {
    id: 3,
    text: "The content framework they built for us douled our web traffic and improved lead generation sinificantly. Couldn't recommend them more.",
    client: "__David chen, CEO, EFG Tech",
  },
  {
    id: 4,
    text: "We needed an impactful awareness campaign, and they delivered beyond expectations. The community engagement we achieved was incredible.",
    client: "__Amaka okafor, director GHI NGO",
  },
];

export const FAQs: faq[] = [
  {
    value: "item-1",
    question: "What types of businesses do you work with?",
    answer:
      "We partner with startups, small businesses, and established brands across different industries. Starting out or scaling up, our strategies are crafted to align with your uninque goals.",
  },
  {
    value: "item-2",
    question: "How long does it take to see results?",
    answer:
      "It depends on the service. Branding projects typically take a few weeks, while marketing campaigns can start showing measurable results within 1-3 months. We'll give you a clear timeline at the start of every project.",
  },
  {
    value: "item-3",
    question: "Do you offer custom packages or fixed pricing?",
    answer:
      "We know every business has different needs. That's why we provide flexible packages as well as custom solutions, ensuring you only pay for what truly benefits your brand.",
  },
  {
    value: "item-4",
    question: "What makes your agency different?",
    answer:
      "We combine creativity with strategy. Instead of one-size-fits-all solutions, we take time to understand your business, audience and goals, then craft strategies that deliver long-term results.",
  },
  {
    value: "item-5",
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form or email us directly. We'll schedule a free consultation to understand your needs and recommend the best way forward.",
  },
];
