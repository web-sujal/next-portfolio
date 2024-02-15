"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      About Page
    </motion.div>
  );
};

export default AboutPage;
