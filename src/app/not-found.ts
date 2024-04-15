"use client";
import { redirect, usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const currentLang = pathname.slice(1, 6);
  if (currentLang === "id-ID") {
    return redirect(`/${currentLang}/not-found`);
  } else if (currentLang === "en-US") {
    return redirect(`/${currentLang}/not-found`);
  }
}
