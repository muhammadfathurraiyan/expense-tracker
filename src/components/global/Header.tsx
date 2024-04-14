"use client";
import React from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { SidebarToggle } from "./SidebarToggle";
import { usePathname } from "next/navigation";

type TContent = {
  nav: {
    home: string;
    features: string;
    about: string;
    contact: string;
  };
  mode: {
    light: string;
    dark: string;
    system: string;
    label: string;
  };
  lang: {
    eng: string;
    ind: string;
    label: string;
  };
};

export default function Header({
  content,
  lng,
}: {
  content: TContent;
  lng: string;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="md:container px-4 py-2 max-md:py-4 flex items-center justify-between border-b">
      <h3 className="text-gradient">ExpenseTracker</h3>
      <nav className="flex items-center gap-4 text-sm max-md:hidden">
        <Link
          href={pathname === `/${lng}` ? "#home" : `/${lng}#home`}
          className="hover:text-primary duration-300"
        >
          {content.nav.home}
        </Link>
        <Link
          href={pathname === `/${lng}` ? "#features" : `/${lng}#features`}
          className="hover:text-primary duration-300"
        >
          {content.nav.features}
        </Link>
        <Link
          href={pathname === `/${lng}` ? "#about" : `/${lng}#about`}
          className="hover:text-primary duration-300"
        >
          {content.nav.about}
        </Link>
        <Link
          href={pathname === `/${lng}` ? "#contact" : `/${lng}#contact`}
          className="hover:text-primary duration-300"
        >
          {content.nav.contact}
        </Link>
      </nav>
      <div className="flex items-center gap-2 max-md:hidden">
        <Link href={`/${lng}/auth`} className={buttonVariants({ size: "sm" })}>
          Login
        </Link>
        <ModeToggle content={content.mode} />
        <LangToggle content={content.lang} />
      </div>
      <div className="md:hidden">
        <SidebarToggle lng={lng} content={content} />
      </div>
    </header>
  );
}
