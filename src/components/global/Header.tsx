"use client";
import React from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="sticky container py-2 flex items-center justify-between border-b">
      <h3 className="text-gradient">ExpenseTracker</h3>
      <nav className="flex items-center gap-4 text-sm">
        <Link href={""}>Feautures</Link>
        <Link href={""}>Pricing</Link>
        <Link href={""}>Contact</Link>
        <Link href={""}>About</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button size={"sm"} className="flex items-center gap-2">
          Login
        </Button>
        <ModeToggle />
        <LangToggle />
      </div>
    </header>
  );
}
