import React from 'react';
import { motion } from 'framer-motion';

const Character = (props: any) => {
  const { variants, characterImage, handleClick, currentCharacter } = props;
  return (
    <motion.img
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
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
