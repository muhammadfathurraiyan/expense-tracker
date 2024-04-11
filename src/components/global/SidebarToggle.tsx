import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LangToggle from "./LangToggle";
import ModeToggle from "./ModeToggle";
import {
  BadgeDollarSign,
  BadgeInfo,
  Menu,
  PartyPopper,
  Phone,
} from "lucide-react";
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
            <PartyPopper /> Features
          </Link>
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <BadgeDollarSign />
            Pricing
          </Link>
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <Phone />
            Contact
          </Link>
          <Link
            href={""}
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <BadgeInfo /> About
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
