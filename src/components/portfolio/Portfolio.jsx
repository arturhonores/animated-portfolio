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
  },
  {
    id: 2,
    title: "Cash Minder",
    img: "./cashMinder.jpg",
    desc: "Web application for tracking personal expenses.",
    tech: "React-Redux, React-Router-DOM, Redux Toolkit, Axios, Tailwind CSS",
  },
  {
    id: 3,
    title: "Air Nostrum",
    img: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, veniam fugit beatae voluptas, magni velit fuga deleniti nihil asperiores vero debitis distinctio quod.",
    tech: "React-Redux, React-Router-DOM, Redux Toolkit, Axios, Tailwind CSS",
  },
  {
    id: 4,
    title: "Moove Cars",
    img: "https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, veniam fugit beatae voluptas, magni velit fuga deleniti nihil asperiores vero debitis distinctio quod.",
    tech: "React-Redux, React-Router-DOM, Redux Toolkit, Axios, Tailwind CSS",
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
            <a>View work</a>
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
        <h1>Features Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
