"use client";

import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function Mode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="z-100"
    >
      {isDark ? (
        <LuSun className="h-5 w-5 font-bold text-4xl text-lightfont" />
      ) : (
        <LuMoon className="h-5 w-5 text-burgundry font-bold text-4xl" />
      )}
    </Button>
  );
}
