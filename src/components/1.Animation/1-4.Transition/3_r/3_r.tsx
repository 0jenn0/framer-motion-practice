import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import styles from "./3_r.module.css";

const TransitionComponent3 = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} className={styles.box} style={{ x, y }} />;
};

export default TransitionComponent3;
