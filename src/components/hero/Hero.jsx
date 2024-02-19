import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const sections = ["Portfolio", "Contact"];
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="title-container">
            <motion.h2 variants={textVariants}>Arturo Honores</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href={`#${sections[0]}`}>
              Last projects
            </motion.a>
            <motion.a variants={textVariants} href={`#${sections[1]}`}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          MERN Full Stack
        </motion.div>
        <div className="imageContainer">
          {/* <img src="/hero.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
