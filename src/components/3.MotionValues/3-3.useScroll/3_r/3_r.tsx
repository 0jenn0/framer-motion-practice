import { useRef } from "react";
import * as S from "./3_r.styled";
import { useScroll, motion } from "framer-motion";

const Item = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <S.Container>
      <S.Progress>
        <S.ProgressSvg viewBox="0 0 100 100">
          <S.CircleBackground cx="50" cy="50" r="30" pathLength="1" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#eb3434"
            strokeWidth="1"
            strokeLinecap="square"
            style={{
              strokeDashoffset: 0, //점선 패턴의 시작점을 결정
              strokeWidth: "5%",
              fill: "none",
              pathLength: scrollYProgress,
            }}
          />
        </S.ProgressSvg>
      </S.Progress>
      <S.Box ref={ref} />
    </S.Container>
  );
};

const UseScrollSelf03 = () => {
  return (
    <S.Layout>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </S.Layout>
  );
};

export default UseScrollSelf03;
