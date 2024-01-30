import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, veniam fugit beatae voluptas, magni velit fuga deleniti nihil asperiores vero debitis distinctio quod.",
  },
  {
    id: 2,
    title: "Next Commerce",
    img: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, veniam fugit beatae voluptas, magni velit fuga deleniti nihil asperiores vero debitis distinctio quod.",
  },
  {
    id: 3,
    title: "Air Nostrum",
    img: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, veniam fugit beatae voluptas, magni velit fuga deleniti nihil asperiores vero debitis distinctio quod.",
  },
  {
    id: 4,
    title: "Moove Cars",
    img: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, veniam fugit beatae voluptas, magni velit fuga deleniti nihil asperiores vero debitis distinctio quod.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
