import "./about.scss";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
  const controls = useAnimation();

  const vibracion = {
    x: [0, -5, 5, -5, 5, -3, 3, -2, 2, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }, // Repite infinitamente
  };

  // Lógica para iniciar la vibración cuando isInview es true
  if (isInview) {
    controls.start({
      x: vibracion.x,
      transition: vibracion.transition,
      transitionEnd: { loop: Infinity }, // Añade un bucle infinito
    });
  }

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
        <p>
          My preferred <br /> technology stack
        </p>
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
          <motion.a
            animate={vibracion}
            href="/CV-arturo-honores.pdf"
            download="CV-arturo-honores"
          >
            resume
          </motion.a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Slider />
      </motion.div>
    </motion.div>
  );
};

export default About;
