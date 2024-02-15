"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links */}
      <div className="hidden flex-1 justify-start gap-4 md:flex">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden md:flex-1 md:justify-center lg:flex">
        <Link
          href="/"
          className="flex items-center justify-center rounded-md bg-black p-1 text-sm font-semibold"
        >
          <span className="mx-2 text-white">Sujal</span>
          <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-black">
            .dev
          </span>
        </Link>
      </div>

      {/* social account links */}
      <div className="hidden flex-1 justify-end gap-4 md:flex">
        <Link href="#">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex cursor-pointer flex-col items-center justify-between gap-2"
        >
          <div className="h-1 w-10 rounded bg-slate-600"></div>
          <div className="h-1 w-10 rounded bg-slate-600"></div>
          <div className="h-1 w-10 rounded bg-slate-600"></div>
        </button>

        {/* Menu Links */}
        {isOpen && (
          <div className="py-auto absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center  gap-8 bg-black text-4xl text-white">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
