import "./about.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "../slider/Slider";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInview = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      //animación inicia cuando inicia la vista
      ref={ref}
      // animate={isInview && "animate"} no funciona en mobile
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I am WEB DEVELOPER</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Learn</motion.b> more
            about me
          </h1>
        </div>
        <div className="title">
          <h1>
            by <motion.b whileHover={{ color: "orange" }}>Downloading</motion.b>{" "}
            my
          </h1>
          <button>resume</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Slider />
      </motion.div>
    </motion.div>
  );
};

export default About;
