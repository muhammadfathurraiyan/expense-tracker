"use client";
import { LogOut, Settings, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type TContent = {
  profile: string;
  settings: string;
};

export default function UserToggle({ content }: { content: TContent }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <UserRound className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle user</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex flex-col">
          Raiyan{" "}
          <span className="text-xs text-muted-foreground">
            user@example.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <UserRound className="h-[1.2rem] w-[1.2rem]" />
          {content.profile}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <Settings className="h-[1.2rem] w-[1.2rem]" />
          {content.settings}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <LogOut className="h-[1.2rem] w-[1.2rem]" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
