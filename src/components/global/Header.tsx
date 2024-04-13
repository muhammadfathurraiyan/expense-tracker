"use client";
import React from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarToggle } from "./SidebarToggle";

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
  };
  lang: {
    eng: string;
    ind: string;
  };
};

export default function Header({ content }: { content: TContent }) {
  return (
    <header className="md:container px-4 py-2 max-md:py-4 flex items-center justify-between border-b">
      <h3 className="text-gradient">ExpenseTracker</h3>
      <nav className="flex items-center gap-4 text-sm max-md:hidden">
        <Link href="#home" className="hover:text-primary duration-300">
          {content.nav.home}
        </Link>
        <Link href="#features" className="hover:text-primary duration-300">
          {content.nav.features}
        </Link>
        <Link href="#about" className="hover:text-primary duration-300">
          {content.nav.about}
        </Link>
        <Link href="#contact" className="hover:text-primary duration-300">
          {content.nav.contact}
        </Link>
      </nav>
      <div className="flex items-center gap-2 max-md:hidden">
        <Button size={"sm"} className="flex items-center gap-2">
          Login
        </Button>
        <ModeToggle content={content.mode} />
        <LangToggle content={content.lang} />
      </div>
      <div className="md:hidden">
        <SidebarToggle content={content} />
      </div>
    </header>
  );
}
