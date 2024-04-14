"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

type TContent = {
  light: string;
  dark: string;
  system: string;
  label: string;
};

export default function ModeToggle({ content }: { content: TContent }) {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {isClient && theme === "system" && (
            <Monitor className="h-[1.2rem] w-[1.2rem]" />
          )}
          {isClient && theme === "light" && (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          {isClient && theme === "dark" && (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{content.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          {content.light}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          {content.dark}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setTheme("system")}
        >
          <Monitor className="h-[1.2rem] w-[1.2rem]" />
          {content.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
