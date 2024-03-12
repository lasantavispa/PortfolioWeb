import React from 'react';
import '../../scss/layout/Introduction/Introduction.scss';
import { motion } from 'framer-motion';


function Introduction() {

  return (
    <motion.section     
      initial={{ scale: 0 }}
      transition={{ duration: 2 }}
      animate={{ scale: 1 }}
      className="boxIntro"
      id="1"
    >
      Introduction fftttt
    </motion.section>
  );
}

export default Introduction;
