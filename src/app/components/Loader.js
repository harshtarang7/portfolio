import { motion } from 'framer-motion';

const loaderContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '-100vw', // Slide the page to the left
    transition: {
      duration: 1, // Slow down the transition
      ease: 'easeInOut', // Smooth transition
    },
  },
};

const loaderVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      loop: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#ffffff' }}
      variants={loaderContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>Loading...</div>
      <motion.div
        className="loader"
        style={{ width: '50px', height: '50px', border: '4px solid #ffffff', borderTop: '4px solid transparent', borderRadius: '50%' }}
        variants={loaderVariants}
        initial="initial"
        animate="animate"
      ></motion.div>
    </motion.div>
  );
};

export default Loader;