import { useScroll, useSpring } from "framer-motion";
import * as S from "./4_r.styled";
import Item from "./component/Item";
import { useRef } from "react";

const UseScrollSelf04 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <S.Layout ref={ref}>
        {Array.from({ length: 5 }, (_, index) => {
          return <Item key={index + 1} id={index} containRef={ref} />;
        })}
      </S.Layout>
      <S.MotionDiv style={{ scaleX }} />
    </>
  );
};

export default UseScrollSelf04;
