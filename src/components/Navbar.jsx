"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
          className="relative z-50 flex h-8 w-10 flex-col items-center justify-between gap-2"
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            className="h-1 w-10 origin-left rounded bg-black"
          ></motion.div>
        </button>

        {/* Menu Links */}
        {isOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="py-auto absolute left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center  gap-8 bg-black text-4xl text-white"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
