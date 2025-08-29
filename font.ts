import {
  Source_Sans_3,
  DM_Serif_Display,
  Inter,
  Source_Code_Pro,
  Ubuntu,
  Pacifico,
} from "next/font/google";

export const h1font = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-h1",
  display: "swap",
});
export const h2font = Inter({
  weight: ["400", "700", "600"],
  subsets: ["latin"],
  variable: "--font-h2",
  display: "swap",
});
export const textfont = Source_Sans_3({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
export const formfont = Source_Code_Pro({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-form",
  display: "swap",
});
export const buttonfont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-button",
  display: "swap",
});
export const logofont = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});
