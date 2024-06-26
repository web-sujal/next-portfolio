"use client";

import { LampContainer } from "@/components/ui/lamp";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const items = [
  {
    id: 1,
    title: "Spotify Clone",
    desc: "A captivating web platform inspired by Spotify, crafted for immersive music streaming experiences.",
    img: "https://github.com/web-sujal/spotify-clone/blob/main/public/images/spotify-logo.jpg?raw=true",
    link: "https://web-sujal-spotify-clone.vercel.app/",
  },
  {
    id: 2,
    title: "Snapgram",
    desc: " Your vibrant social hub! React.js and TypeScript bring it to life. Instant login, easy post creation, likes, saves, and endless exploration. Click profiles, connect, and shine!. Share what's on your mind in a snap. Join Snapgram now!",
    img: "https://images.pexels.com/photos/5053835/pexels-photo-5053835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://your-snapgram.netlify.app",
  },
  {
    id: 3,
    title: "TodoMate",
    desc: "Your ultimate task companion! Enjoy effortless todo creation, and tagging. Access your todos from any platform. Stay organized, wherever you are, with TodoMate!",
    img: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://app-todomate.netlify.app",
  },
  {
    id: 4,
    title: "Vartalapp",
    desc: "Minimalistic chatting app to keep you connected with your loved ones. Real-time chat like WhatsApp, photo sharing etc. Connect effortlessly with Vartalapp!",
    img: "https://images.pexels.com/photos/7148671/pexels-photo-7148671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://vartalapp.netlify.app/",
  },
];

const Single = ({ item }) => {
  const isMobileScreens = useMediaQuery("(max-width: 640px)");

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="flex h-screen w-full items-center justify-center bg-slate-900 text-white">
      <div className="container flex flex-col items-center justify-center gap-6 overflow-hidden md:flex-row lg:gap-12">
        <div className="flex flex-1 justify-end">
          <Image
            ref={ref}
            src={item.img}
            alt={item.title}
            unoptimized
            width={isMobileScreens ? 300 : 500}
            height={isMobileScreens ? 300 : 500}
            className="rounded-md object-contain pl-4 md:object-cover"
          />
        </div>

        {/* Text */}
        <motion.div
          style={isMobileScreens ? {} : { y }}
          className="flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden px-10 text-center md:items-start md:px-4 md:text-left lg:px-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl">{item.title}</h2>
          <p className="max-w-md text-xs text-gray-500 md:text-sm">
            {item.desc}
          </p>
          <button>
            <a
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              className="font-white w-[200px] cursor-pointer rounded-md border-none bg-rose-700 py-2 text-center"
            >
              See Demo
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  const text = "Ready to Collaborate?";
  const ref = useRef();

  const MotionLink = motion(Link);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="relative h-full">
        {/* lamp */}
        <LampContainer className="h-[calc(100vh-6rem)] overflow-x-hidden rounded-none">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-3 bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text px-5 py-4 text-center text-8xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            MY WORKS
          </motion.h1>
        </LampContainer>

        {/* projects section */}
        <div className="h-[400vh] w-full" ref={ref}>
          {/* progress */}
          <div className="sticky left-0 top-0 bg-slate-950 pt-8 text-center text-4xl font-extrabold text-rose-600">
            <h1>Featured Works</h1>
            <motion.div
              style={{ scaleX }}
              className="h-1.5 rounded-full bg-white"
            />
          </div>

          {/* single projects */}
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>

        {/* Hire Me */}
        <section className="mx-auto flex h-[80vh] flex-col items-center justify-center gap-6 bg-slate-900 text-center text-white">
          <div>
            {text.split(" ").map((text, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 2, delay: index * 0.1 }}
                key={index}
                className="mx-auto -translate-y-10 transform px-4 text-center text-4xl font-extrabold"
              >
                {text}{" "}
              </motion.span>
            ))}
          </div>
          <MotionLink
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="/contact"
            className="z-20 inline-block -translate-y-10 transform cursor-pointer rounded-lg border-none bg-rose-800 px-5 py-2 text-white outline-none ring-1 ring-rose-600 ring-offset-1 hover:bg-rose-700"
          >
            Hire Me
          </MotionLink>
        </section>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
