import React from 'react';
import '../../scss/layout/AboutMe/AboutMe.scss';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <motion.section
      initial={{ scale: 0 }}
      transition={{ duration: 2 }}
      animate={{ scale: 1 }}
      className="boxAbout"
      id="4"
    >
      AboutMe
    </motion.section>
  );
}

export default AboutMe;
