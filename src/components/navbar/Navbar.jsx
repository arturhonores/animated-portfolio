import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
// import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          ArturHonores
        </motion.span> */}
        <div className="social">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arturhonores/">
            <img src="/linkedin-icon.svg" alt="" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/arturhonores">
            <img src="/github-icon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
