import { motion } from "framer-motion";
import styles from "./1_r.module.css";

const TransitionComponent1 = () => {
  return (
    <motion.div
      className={styles.box}
      //   initial={{ opacity: 0, scale: 0.5 }}
      //   animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5, x: 0 }}
      animate={{ opacity: 1, scale: 1, x: 100 }}
      //   transition={{
      //     duration: 0.8,
      //     delay: 0.5,
      //     ease: [0, 0.71, 0.2, 1.01],
      //   }}
      transition={{
        // 이렇게 특정값에 따라서만 transition설정 가능
        ease: "linear",
        duration: 2, // opacity,scale은 duration 2 걸리고
        x: { duration: 0.4 }, // x는 0.4는 걸리게된다.
      }}
    />
  );
};

export default TransitionComponent1;
