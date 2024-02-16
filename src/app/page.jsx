"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mx-4 mt-10 flex h-full flex-col sm:mx-8 md:mx-12 lg:mx-20 lg:flex-row xl:mx-48">
        {/* Image Container */}
        <div className="relative min-h-[50%] flex-1 pb-6 lg:h-full lg:pb-0">
          <Image
            src="/hero.png"
            alt="hero image"
            className="object-contain"
            fill
          />
        </div>

        {/* Text Container */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 pt-4 lg:pt-0">
          {/* Title */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>

          {/* Description */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* Buttons */}
          <div className="flex w-full gap-4 pb-12">
            <button className="rounded-lg bg-black p-4 text-white ring-1 ring-black">
              View My Work
            </button>
            <button className="rounded-lg p-4 ring-1 ring-black transition-all duration-150 hover:bg-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
