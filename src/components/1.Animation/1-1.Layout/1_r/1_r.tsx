import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const LayoutComponent1 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.switch} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default LayoutComponent1;
