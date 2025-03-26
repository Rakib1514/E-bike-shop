import { motion } from "framer-motion";
import "./home.css";
import { useState } from "react";

const Banner = () => {
  const [activePanel, setActivePanel] = useState(0);

  const handlePanelClick = (panelIndex: number) => {
    setActivePanel(panelIndex);
  };

  return (
    <div className="relative h-[85vh] w-full overflow-x-hidden">
      <motion.div
        onClick={() => handlePanelClick(1)}
        className="absolute top-0 left-0 z-30 h-full w-[60vw] bg-[url('https://i.ibb.co.com/Jw3MkCMJ/1.webp')] bg-cover bg-no-repeat"
        animate={{ x: activePanel >= 2 ? "-40vw" : "0vw" }}
        transition={{ease: "circInOut"}}
      >
        1
      </motion.div>
      <motion.div
        onClick={() => handlePanelClick(2)}
        className="absolute top-0 left-[20vw] z-20 h-full w-[60vw] bg-[url('https://i.ibb.co.com/q30DRW2c/2.webp')] bg-cover bg-no-repeat"
        animate={{ x: activePanel >= 3 ? "-40vw" : activePanel === 2 ? "0vw" : "0vw" }}
        transition={{ease: "circInOut"}}
      >
        2
      </motion.div>
      <motion.div
        onClick={() => handlePanelClick(3)}
        className="absolute top-0 left-[40vw] z-10 h-full w-[60vw] bg-[url('https://i.ibb.co.com/5xLyrdDp/3.webp')] bg-cover bg-no-repeat"
      >
        3
      </motion.div>
    </div>
  );
};

export default Banner;
