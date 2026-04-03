import React from 'react';
import { motion } from 'framer-motion';

const BouncingRobot = ({ imgSrc, size = '450px' }) => {
  return (
    <motion.div
      className="relative mt-[-450px] mr-[140px]"
      animate={{
        y: [0, -30, 0], 
        rotate: [0, 0, 0, 0], 
      }}
      transition={{
        duration: 1.2,
        repeat: 1,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <img
        src={"robo.png"}
        className={`h-[${size}] w-auto`} 
        alt="Bouncing Robot"
      />
      <img
        src={"spade.png"}
        className={"h-[250px] justify-self-end mr-[130px] -translate-y-[340px] "} 
        alt="Bouncing Robot"
      />
    </motion.div>
  );
};

export default BouncingRobot;
