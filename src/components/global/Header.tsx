"use client";
import React from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle";

export default function Header() {
  return (
    <div>
      <ModeToggle />
      <LangToggle />
    </div>
  );
}
