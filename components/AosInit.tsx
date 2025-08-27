"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 600,
      once: false,
    });
  }, []);
  return null;
};

export default AosInit;
