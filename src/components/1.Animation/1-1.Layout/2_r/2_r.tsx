import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const LayoutComponent2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div // layout : 재렌더링될때 레이아웃이 변경되면 여기에 애니메이션 줌
      layout // layout prop 없으면 애니메이션 생기지 않음.
      data-is-open={isOpen}
      initial={{ borderRadius: 50 }}
      className={styles.parent}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className={styles.child} />
    </motion.div>
  );
};

export default LayoutComponent2;
