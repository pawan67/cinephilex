"use client";
import { navUrls } from "@/constants/urls";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Logo from "../miscellaneous/Logo";

function Header() {
  const router = useRouter();
  const currentUrl = usePathname();

  return (
    <header className=" z-50 flex justify-between  my-3 items-center">
      <Logo />
      <nav>
        <ul className=" flex space-x-3 ">
          {navUrls.map((url) => {
            console.log(url.url == currentUrl);

            return (
              <Link
                href={url.url}
                className={`   transition duration-150 border-b-4  hover:border-secondary ${
                  url.url == currentUrl
                    ? "border-secondary "
                    : "border-transparent"
                } `}
              >
                {url.name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
