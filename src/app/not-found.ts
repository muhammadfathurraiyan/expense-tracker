"use client";
import { redirect } from "next/navigation";

export default function NotFound() {
  if (typeof document !== "undefined") {
    const currentLang = document.location.pathname.slice(1, 6);
    if (currentLang === "id-ID") {
      return redirect(`/${currentLang}/not-found`);
    } else if (currentLang === "en-US") {
      return redirect(`/${currentLang}/not-found`);
    }
  }
}
