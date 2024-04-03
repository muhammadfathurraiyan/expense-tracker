"use client";
import { redirect } from "next/navigation";

export default function NotFound() {
  if (typeof document !== "undefined") {
    const currentLang = document.location.pathname.substring(1, 3);
    if (currentLang === "id") {
      return redirect(`/${currentLang}/not-found`);
    } else if (currentLang === "en") {
      return redirect(`/${currentLang}/not-found`);
    }
  }
}
