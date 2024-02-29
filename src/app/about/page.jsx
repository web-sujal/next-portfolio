"use client";

import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Material-UI",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Firebase",
  "Appwrite",
];

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="scrollbar flex h-full overflow-scroll" ref={containerRef}>
        {/* Text Container */}
        <div className="l:p-48 flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48 lg:p-20 xl:w-1/2 xl:gap-52">
          {/* Biography */}
          <div className="flex min-h-[calc(100vh-6rem)] flex-col justify-center gap-12">
            {/* Title */}
            <h1 className="text-2xl font-bold">Biography</h1>
            {/* Description */}
            <p className="text-lg">
              {
                "Hey, I'm Sujal, an aspiring web developer with a knack for crafting intuitive digital experiences. Proficient in the MERN stack and always hungry to learn more. Let's collaborate and create something amazing!"
              }
            </p>
            {/* Quote */}
            <span className="italic">Dream it. Code it. Live it.</span>

            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                duration: 3,
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* Skills */}
          <div
            className="flex h-[calc(100vh-6rem)] flex-col justify-center gap-12 pb-36"
            ref={skillRef}
          >
            {/* Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              Skills
            </motion.h1>

            {/* Skill List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              {skillList.map((skill) => (
                <div
                  key={skill}
                  className="cursor-pointer rounded bg-black p-2 text-sm text-white transition-all duration-150 hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Experience */}
          {/* <div className=""></div> */}
        </div>

        {/* Svg Container */}
        <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
