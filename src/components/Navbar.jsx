/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

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

  // animation
  const MotionLink = motion(Link);

  const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (item, event, x, y) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  return (
    <div className="flex h-full items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <AnimatePresence>
        {/* Links */}
        <ul className="hidden flex-1 justify-start gap-4 md:flex">
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const textX = useTransform(x, (latest) => latest * 0.5);
            const textY = useTransform(y, (latest) => latest * 0.5);

            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                key={link.path}
                onPointerLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-500 ease-out
                    ${pathName === link.url ? "bg-black text-white" : ""}`}
                  href={link.url}
                >
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className={`relative z-10`}
                  >
                    {link.title}
                  </motion.span>
                </MotionLink>
              </motion.li>
            );
          })}
          {/* {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))} */}
        </ul>

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
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/web-sujal"
          >
            <Image src="/github.png" alt="github" width={24} height={24} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/s.ujal_rajput"
          >
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/web-sujal"
          >
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
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
