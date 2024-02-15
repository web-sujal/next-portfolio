"use client";

import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Portfolio Page
    </motion.div>
  );
};

export default PortfolioPage;
