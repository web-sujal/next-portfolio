"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col overflow-scroll px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="flex h-1/2 items-center justify-center text-6xl lg:h-full lg:w-1/2">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* Form Container */}
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="flex h-1/2 flex-col justify-center gap-6 rounded-xl bg-red-50 p-24 text-xl lg:h-full lg:w-1/2"
        >
          <span>Dear Sujal,</span>
          <textarea
            rows={6}
            name="user_message"
            className="resize-none border-b-2 border-black bg-transparent outline-none"
          />
          <span>My mail address is:</span>
          <input
            type="text"
            name="user_email"
            className="border-b-2 border-black bg-transparent outline-none"
          />
          <span>Regards</span>
          <button className="rounded bg-purple-200 p-4 font-semibold text-gray-600">
            Send
          </button>
          {success && (
            <span className="font-semibold text-green-600">
              Your message was sent successfully.
            </span>
          )}
          {error && (
            <span className="font-semibold text-red-600">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
