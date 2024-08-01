"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-slate-900 mt-10`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/#" className="block w-full py-5">
              <img src="./logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div className="justify-end flex pr-0 gap-3">
              <Link
                href="/#"
                className="px-7 py-3 text-dark hover:text-primary dark:text-white border-4 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500 rounded-xl font-bold text-xl"
              >
                Home
              </Link>
              <Link
                href="/characters"
                className="px-7 py-3 text-dark hover:text-primary dark:text-white border-4 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500 rounded-xl font-bold text-xl"
              >
                Characters
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
