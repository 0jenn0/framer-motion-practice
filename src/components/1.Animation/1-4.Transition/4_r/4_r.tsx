import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./4_r.module.css";

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

const TransitionComponent4 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={styles.example}>
      <motion.div className={styles.box} animate={isVisible ? show : hide} />
      <div className={styles.controls}>
        <motion.button
          className={styles.button}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </motion.button>
      </div>
    </div>
  );
};

export default TransitionComponent4;
