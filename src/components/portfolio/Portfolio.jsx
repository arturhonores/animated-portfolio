import "./portfolio.scss";
import { useRef } from "react";
import { motion, px, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "JavaScript Quiz",
    img: "./desafio.jpg",
    desc: "Quiz of 12 questions about JavaScript.",
    tech: "React-Redux, React-Router-DOM, Redux Toolkit, Axios, Tailwind CSS",
    url: "https://quizjavascript.arturhonores.dev",
  },
  {
    id: 2,
    title: "Cash Minder",
    img: "./cashMinder.jpg",
    desc: "Web application for tracking personal expenses.",
    tech: "Fronted => React, React-Router-Dom, Nivo, Axios, Tailwind CSS || Backend => NodeJS, Express, MongoDB, Mongoose, jsonwebtoken",
    url: "https://cashminder.arturhonores.dev",
  },
  {
    id: 3,
    title: "Space Invaders",
    img: "./space.jpg",
    desc: "Desktop version of the video game 'Space Invaders.",
    tech: "HTML 5 Canvas, Vanilla JavaScript, CSS",
    url: "https://game.arturhonores.dev",
  },
  {
    id: 4,
    title: "Portfolio V.1.0",
    img: "./portfolio1.jpg",
    desc: "First version of this portfolio.",
    tech: "React, Tailwind CSS, EmailJS, Google Maps API",
    url: "https://arturhonores.dev/",
  },
  {
    id: 5,
    title: "Landing Page",
    img: "./abogado.jpg",
    desc: "Landin Page for immigration lawyer.",
    tech: "HTML, CSS3, Vanilla JavaScript, Tiny Slider.",
    url: "https://lawyer.arturhonores.dev/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>
              <span>Tech Stack: </span>
              {item.tech}
            </p>
            <a href={item.url} target="_blank" rel="noreferrer">
              View work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
