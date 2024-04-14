"use client";
import { Languages, Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

type TContent = {
  eng: string;
  ind: string;
  label: string;
};

export default function LangToggle({ content }: { content: TContent }) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{content.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => router.push(`/id-ID/${pathName.slice(7)}`)}
        >
          {content.ind}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => router.push(`/en-US/${pathName.slice(7)}`)}
        >
          {content.eng}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
