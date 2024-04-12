import React from "react";

export default function Footer() {
  return (
    <footer className="md:container px-2 py-8 flex flex-col items-center justify-between relative">
      <div className="absolute top-0 h-1 w-24 rounded-full bg-gradient-to-tl from-gradient1 to-gradient2" />
      <p className="">Site design with 💙 by tamir & raiyan.</p>
      <p className="text-xs">&copy; 2024 ExpenseTracker. All right reserved.</p>
    </footer>
  );
}
