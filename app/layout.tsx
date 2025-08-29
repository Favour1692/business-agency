import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {
  h1font,
  textfont,
  h2font,
  formfont,
  buttonfont,
  logofont,
} from "@/font";
import AosInit from "@/components/AosInit";
import PreloadImage from "./PreloadImage";

export const metadata: Metadata = {
  title: "Nexure Agency",
  description: "A website for a business agency company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${h1font.variable} ${h2font.variable} ${formfont.variable} ${buttonfont.variable} ${logofont} scroll-smooth`}
    >
      <body className="overflow-x-hidden">
        <PreloadImage />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosInit />
          <Navbar />
          <main
            className={`${textfont.className} antialiased bg-light text-darkfont dark:bg-charcoal dark:text-lightfont`}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
