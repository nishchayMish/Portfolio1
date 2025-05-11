import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_opgkdbq',
        'template_cryavog',
        {
          from_name: form.name,
          to_name: 'Nishchay',
          from_email: form.email,
          to_email: 'nishchaymishra2100@gmail.com',
          message: form.message,
        },
        'I_aak_osyHbI11_3j'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      ref={ref}
      className="min-h-screen text-white py-16 px-4 md:px-10 flex items-center justify-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
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
          ref={formRef}
          onSubmit={handleSubmit}
          variants={item}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-lg space-y-6"
        >
          <motion.div variants={item} className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
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
              value={form.email}
              onChange={handleChange}
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
              value={form.message}
              onChange={handleChange}
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
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
