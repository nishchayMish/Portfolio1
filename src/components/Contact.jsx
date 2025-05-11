import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 2,
      ease: 'easeOut',
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="min-h-screen text-white py-16 px-4 md:px-10 flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-3xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-4xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <motion.p variants={item} className="text-center text-gray-400 mb-10">
          Have a project in mind or just want to say hello? Fill the form below!
        </motion.p>

        <motion.form
          variants={item}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-lg space-y-6"
        >
          <motion.div variants={item} className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-pink-500"
              placeholder="Name"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
              Name
            </label>
          </motion.div>

          <motion.div variants={item} className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-pink-500"
              placeholder="Email"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
              Email
            </label>
          </motion.div>

          <motion.div variants={item} className="relative">
            <textarea
              name="message"
              rows="4"
              required
              className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-pink-500 resize-none"
              placeholder="Your message"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
              Message
            </label>
          </motion.div>

          <motion.button
            variants={item}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
