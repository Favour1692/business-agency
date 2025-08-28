"use client";

import { navdata } from "@/constants";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Mode from "@/components/Mode";
import { logofont, h2font } from "@/font";
import Mobilemenu from "./Mobilemenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${h2font.className} ${
        scroll
          ? `bg-graylight dark:bg-graydark shadow-[0_1px_2px_#333] dark:shadow-[0_1px_2px_#333]`
          : `bg-transparent shadow-none`
      } antialiased fixed top-0 left-0 right-0 w-full py-4 lg:py-6 z-50 overflow-x-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-burgundry dark:text-dimburgundry">
          <div className={`${logofont.className} antialiased text-2xl`}>
            <Link href="#home" className="text-contrast font-semibold">
              Nexure
            </Link>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            {navdata.map((data) => {
              return (
                <Link
                  key={data.id}
                  href={data.href}
                  className="hover:text-dimburgundry dark:hover:text-burgundry text-xl font-bold`"
                >
                  {data.title}
                </Link>
              );
            })}
            <Mode />
          </div>
          <div className="lg:hidden flex items-center">
            <Mode />
            {open ? (
              <IoMdClose
                onClick={handleClick}
                className="z-100 lg:hidden text-burgundry dark:text-dimburgundry font-bold text-xl"
              />
            ) : (
              <FiMenu
                onClick={handleClick}
                className="z-100 lg:hidden text-burgundry dark:text-dimburgundry font-bold text-xl"
              />
            )}
          </div>
        </div>
      </div>

      <Mobilemenu open={open} handleClick={handleClick} />
    </nav>
  );
};

export default Navbar;
