"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="h-screen w-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-black"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed inset-0 z-50 m-auto h-fit w-fit cursor-default rounded-t-[100px] bg-black text-8xl text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="fixed bottom-0 z-30 h-screen w-screen rounded-t-[100px] bg-black"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
