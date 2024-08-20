import { useScroll } from "framer-motion";
import * as S from "./1_r.style";
import { LoremIpsum } from "@/components/1.Animation/1-3.Scroll/1_r/components/LoremIpsum";

const UseScrollSelf01 = () => {
  const { scrollYProgress } = useScroll();

  return (
    <S.Layout>
      <S.ProgressBar style={{ scaleX: scrollYProgress }} />
      <LoremIpsum />
    </S.Layout>
  );
};

export default UseScrollSelf01;
