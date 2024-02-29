"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="scrollbar h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mx-4 mt-10 flex h-full flex-col gap-4 sm:mx-8 md:mx-12 lg:mx-20 lg:mt-16 lg:flex-row xl:mx-48 xl:mt-0">
        {/* Image Container */}
        <div className="mx-auto flex h-[300px] min-h-[50%] w-[300px] flex-1 items-center justify-center pb-6 md:h-[500px] md:w-[500px] lg:h-full lg:flex-1 lg:pb-0">
          <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
            <Image
              src="/img.png"
              alt="hero image"
              className="blob m-auto object-contain p-2"
              fill
            />

            {/* social account links */}
            <div className="absolute -right-4 bottom-0 top-[50%] z-30 flex -translate-y-1/2 transform flex-col items-center gap-4 md:hidden">
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
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 pb-10 pt-4 lg:pt-0">
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
          <div className="flex w-full gap-4">
            <Link
              href="/portfolio"
              className="rounded-lg bg-black p-4 text-white ring-1 ring-black"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="rounded-lg p-4 ring-1 ring-black transition-all duration-150 hover:bg-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

/*
  // TODO: 
  background gradient on project cards
  background beams - portfolio or home
  lamp effect - MY WORKS
  Grid and Dot backgrounds

  button:
    // Button code
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Shimmer
    </button>
  
    // tailwind.config.js code
    {
      "animation": {
        shimmer: "shimmer 2s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    }
  
*/
