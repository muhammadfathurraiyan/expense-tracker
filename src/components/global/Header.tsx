"use client";
import React from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarToggle } from "./SidebarToggle";

export default function Header() {
  return (
    <header className="sticky md:container px-2 py-2 flex items-center justify-between border-b">
      <h3 className="text-gradient">ExpenseTracker</h3>
      <nav className="flex items-center gap-4 text-sm max-md:hidden">
        <Link href={""} className="hover:text-primary duration-300">
          Features
        </Link>
        <Link href={""} className="hover:text-primary duration-300">
          Pricing
        </Link>
        <Link href={""} className="hover:text-primary duration-300">
          Contact
        </Link>
        <Link href={""} className="hover:text-primary duration-300">
          About
        </Link>
      </nav>
      <div className="flex items-center gap-2 max-md:hidden">
        <Button size={"sm"} className="flex items-center gap-2">
          Login
        </Button>
        <ModeToggle />
        <LangToggle />
      </div>
      <div className="md:hidden">
        <SidebarToggle />
      </div>
    </header>
  );
}
