import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/codewithrishav/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/rishi_rishav__kumar_9979/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCjhSBFmC-sPsS9ihDDaEPBQ">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="github.com/codewithrishav">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
