import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LangToggle from "./LangToggle";
import ModeToggle from "./ModeToggle";
import { BadgeInfo, Home, Menu, PartyPopper, Phone } from "lucide-react";
import Link from "next/link";

export function SidebarToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <h3 className="text-gradient">ExpenseTracker</h3>
        <nav className="flex flex-col gap-4 mt-6">
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <Home size={20} /> Home
          </Link>
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <BadgeInfo size={20} /> About
          </Link>
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <PartyPopper size={20} />
            Features
          </Link>
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <Phone size={20} />
            Contact
          </Link>
        </nav>
        <div className="space-x-2 absolute bottom-6">
          <LangToggle />
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
