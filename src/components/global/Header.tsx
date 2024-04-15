"use client";
import React from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SidebarToggle } from "./SidebarToggle";
import { useParams, usePathname } from "next/navigation";
import UserToggle from "../user/global/UserToggle";

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
    label: string;
  };
  lang: {
    eng: string;
    ind: string;
    label: string;
  };
};

export default function Header({ content }: { content: TContent }) {
  const authenticated = true;
  const { lng, username } = useParams<{ lng: string; username: string }>();
  const pathname = usePathname();
  return (
    <header className="md:container px-4 py-2 max-md:py-4 flex items-center justify-between border-b">
      <Link
        href={
          pathname === `/${lng}/${username}` ? `/${lng}/${username}` : `/${lng}`
        }
      >
        <h3 className="text-gradient">ExpenseTracker</h3>
      </Link>
      {!authenticated ? (
        <>
          <nav className="flex items-center gap-4 text-sm max-md:hidden">
            <Link
              href={pathname === `/${lng}` ? "#home" : `/${lng}#home`}
              className="hover:text-primary duration-300"
            >
              {content.nav.home}
            </Link>
            <Link
              href={pathname === `/${lng}` ? "#features" : `/${lng}#features`}
              className="hover:text-primary duration-300"
            >
              {content.nav.features}
            </Link>
            <Link
              href={pathname === `/${lng}` ? "#about" : `/${lng}#about`}
              className="hover:text-primary duration-300"
            >
              {content.nav.about}
            </Link>
            <Link
              href={pathname === `/${lng}` ? "#contact" : `/${lng}#contact`}
              className="hover:text-primary duration-300"
            >
              {content.nav.contact}
            </Link>
          </nav>
        </>
      ) : (
        <nav className="flex items-center gap-4 text-sm max-md:hidden">
          <Link
            href={`/${lng}/${username}`}
            className={`${
              pathname === `/${lng}/${username}` && "text-primary"
            } hover:text-primary duration-300`}
          >
            Home
          </Link>
          <Link
            href={`/${lng}/${username}/overview`}
            className={`${
              pathname === `/${lng}/${username}/overview` && "text-primary"
            } hover:text-primary duration-300`}
          >
            Overview
          </Link>
          <Link
            href={`/${lng}/${username}/analytics`}
            className={`${
              pathname === `/${lng}/${username}/analytics` && "text-primary"
            } hover:text-primary duration-300`}
          >
            Analytics
          </Link>
          <Link
            href={`/${lng}/${username}/settings`}
            className={`${
              pathname === `/${lng}/${username}/setting` && "text-primary"
            } hover:text-primary duration-300`}
          >
            Settings
          </Link>
        </nav>
      )}
      <div className="flex items-center gap-2 max-md:hidden">
        {!authenticated && (
          <Link
            href={`/${lng}/auth`}
            className={buttonVariants({ size: "sm" })}
          >
            Login
          </Link>
        )}
        <ModeToggle content={content.mode} />
        <LangToggle content={content.lang} />
        {authenticated && <UserToggle />}
      </div>
      <div className="md:hidden">
        <SidebarToggle lng={lng} username={username} content={content} />
      </div>
    </header>
  );
}
