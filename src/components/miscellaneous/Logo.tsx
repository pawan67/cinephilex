import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className=" cursor-pointer flex  items-center">
      <img className=" w-12" src="/images/logo/logo.png" alt="logo" />
      <div className=" mt-4 font-bold">Cinephilex</div>
    </Link>
  );
}

export default Logo;
