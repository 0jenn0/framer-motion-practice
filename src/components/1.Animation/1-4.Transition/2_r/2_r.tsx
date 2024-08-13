import { motion } from "framer-motion";
import styles from "./2_r.module.css";

const TransitionComponent2 = () => {
  return (
    // <motion.div
    //   className={styles.box}
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{
    //     duration: 0.3,
    //     ease: [0, 0.71, 0.2, 1.01],
    //     scale: {
    //       type: "spring",
    //       damping: 5,
    //       stiffness: 100,
    //       restDelta: 0.001,
    //     },
    //   }}
    // />
    <motion.div
      className={styles.box}
      animate={{ rotate: 180 }}
      transition={{ type: "inertia", velocity: 180 }}
    />
  );
};

export default TransitionComponent2;
