import { motion, useScroll, useSpring } from "framer-motion";
import { LoremIpsum } from "./components/LoremIpsum";
import styles from "./styles.module.css";

const ScrollComponent1 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }); // 얘는 그냥 취향차이. 스크롤바 애니메이션에 spring 효과 넣는거임.
  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <LoremIpsum />
    </>
  );
};

export default ScrollComponent1;
