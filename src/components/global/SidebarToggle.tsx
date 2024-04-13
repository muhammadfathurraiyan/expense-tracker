import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LangToggle from "./LangToggle";
import ModeToggle from "./ModeToggle";
import { BadgeInfo, Home, Menu, PartyPopper, Phone } from "lucide-react";
import Link from "next/link";

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

export function SidebarToggle({ content }: { content: TContent }) {
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
            href="#home"
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <Home size={20} /> {content.nav.home}
          </Link>
          <Link
            href="#features"
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <PartyPopper size={20} />
            {content.nav.features}
          </Link>
          <Link
            href="#about"
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <BadgeInfo size={20} /> {content.nav.about}
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary duration-300 flex items-center gap-4"
          >
            <Phone size={20} />
            {content.nav.contact}
          </Link>
        </nav>
        <div className="space-x-2 absolute bottom-6">
          <LangToggle content={content.lang} />
          <ModeToggle content={content.mode} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
