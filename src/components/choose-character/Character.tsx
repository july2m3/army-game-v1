import React from 'react';
import { motion } from 'framer-motion';

const Character = (props: any) => {
  const { variants, characterImage, handleClick, currentCharacter } = props;
  return (
    <motion.img
      whileHover={{
        // rotate: -360,
        // scale: 1.2,
        scaleX: -1, // flips image
        transition: { duration: 0.1 },
      }}
      src={characterImage}
      alt='none'
      animate='visible'
      initial='hidden'
      variants={variants}
      onClick={() => {
        handleClick(currentCharacter);
      }}
    />
  );
};

export default Character;
