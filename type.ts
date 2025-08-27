import { ReactElement } from "react";

export interface Nav {
  id: number;
  href: string;
  title: string;
}

export interface MobileMenuProps {
  open: boolean;
  handleClick: () => void;
}

export interface Social {
  id: number;
  logo: ReactElement;
  href: string;
}

export interface background {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition?: string;
  backgroundRepeat: string;
  backgroundAttachment?: string;
}

export interface overlay {
  backgroundImage: string;
  backgroundBlendMode: string;
  backgroundRepeat: string;
}

export interface services {
  id: number;
  icon: ReactElement;
  title: string;
  text: string;
}

export interface projects {
  id: number;
  image: string;
  title: string;
  description: string;
  tag: string;
}

export interface testimonial {
  id: number;
  text: string;
  client: string;
}

export interface faq {
  value: string;
  question: string;
  answer: string;
}
