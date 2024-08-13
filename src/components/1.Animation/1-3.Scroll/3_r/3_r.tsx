import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./styles.module.css";
import "./globalStyle.css";

const ScrollComponent3 = () => {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <svg id={styles.progress} width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className={styles.bg} />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="2"
          className={styles.indicator}
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref} className={styles.ul}>
        {[...Array(11)].map((_, index) => (
          <li key={index} className={styles.li}></li>
        ))}
      </ul>
    </>
  );
};

export default ScrollComponent3;
