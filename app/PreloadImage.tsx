"use client";
// preload lcp background image
import ReactDOM from "react-dom";

export default function PreloadImage() {
  ReactDOM.preload("/herobg.webp", { as: "image" });
  return null;
}
