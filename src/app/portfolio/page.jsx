"use client";

import { LampContainer } from "@/components/ui/lamp";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const items = [
  {
    id: 1,
    title: "Snapgram",
    desc: " Your vibrant social hub! React.js and TypeScript bring it to life. Instant login, easy post creation, likes, saves, and endless exploration. Click profiles, connect, and shine!. Share what's on your mind in a snap. Join Snapgram now!",
    img: "https://images.pexels.com/photos/5053835/pexels-photo-5053835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://your-snapgram.netlify.app",
  },
  {
    id: 2,
    title: "TodoMate",
    desc: "Your ultimate task companion! Enjoy effortless todo creation, and tagging. Access your todos from any platform. Stay organized, wherever you are, with TodoMate!",
    img: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://app-todomate.netlify.app",
  },
  {
    id: 3,
    title: "Vartalapp",
    desc: "Minimalistic chatting app to keep you connected with your loved ones. Real-time chat like WhatsApp, photo sharing etc. Connect effortlessly with Vartalapp!",
    img: "https://images.pexels.com/photos/7148671/pexels-photo-7148671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://vartalapp.netlify.app/",
  },
  {
    id: 4,
    title: "Next Music",
    desc: "Your music haven! Enjoy endless tunes, curated playlists, and easy searching. Just press play and feel the rhythm with this amazing app.",
    img: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
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
  const ref = useRef();

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
          <div className="sticky left-0 top-0 bg-slate-950 pt-12 text-center text-4xl font-extrabold text-rose-600">
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
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
