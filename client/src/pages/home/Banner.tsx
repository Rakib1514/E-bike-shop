import { motion } from "framer-motion";
import "./home.css";
import { useState } from "react";
import { Link } from "react-router";

const Banner = () => {
  const [activePanel, setActivePanel] = useState(0);

  const handlePanelClick = (panelIndex: number) => {
    setActivePanel(panelIndex);
  };

  return (
    <div className="relative h-[85vh] w-full overflow-x-hidden">
      <motion.div
        onClick={() => handlePanelClick(1)}
        className="banner__panel left-0 z-30 bg-[url('https://i.ibb.co.com/Jw3MkCMJ/1.webp')]"
        animate={{ x: activePanel >= 2 ? "-40vw" : "0vw" }}
        transition={{ ease: "circInOut" }}
      >
        <p>subtitle</p>
        <p>title</p>
        <Link to={'/'}><button >click me</button></Link>
      </motion.div>
      <motion.div
        onClick={() => handlePanelClick(2)}
        className="banner__panel left-[20vw] z-20 bg-[url('https://i.ibb.co.com/q30DRW2c/2.webp')]"
        animate={{
          x: activePanel >= 3 ? "-40vw" : activePanel === 2 ? "0vw" : "0vw",
        }}
        transition={{ ease: "circInOut" }}
      >
        <p>subtitle</p>
        <p>title</p>
        <Link to={'/'}><button >click me</button></Link>
      </motion.div>
      <motion.div
        onClick={() => handlePanelClick(3)}
        className="banner__panel left-[40vw] z-10 bg-[url('https://i.ibb.co.com/5xLyrdDp/3.webp')]"
      >
        <p>subtitle</p>
        <p>title</p>
        <Link to={'/'}><button >click me</button></Link>
      </motion.div>
    </div>
  );
};

export default Banner;
