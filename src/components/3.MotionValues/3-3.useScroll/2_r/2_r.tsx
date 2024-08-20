import { useScroll } from "framer-motion";
import { useRef } from "react";
import * as S from "./2_r.styled";

const UseScrollSelf02 = () => {
  const carouselRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: carouselRef,
  });

  return (
    <>
      <S.ProgressSvg viewBox="0 0 100 100">
        <S.CircleBackground cx="50" cy="50" r="30" pathLength="1" />
        <S.CircleIndicator
          cx="50"
          cy="50"
          r="30"
          //   pathLength="1"
          style={{ pathLength: scrollXProgress }}
        />
      </S.ProgressSvg>

      <S.Layout ref={carouselRef}>
        {Array.from({ length: 5 }, (_, index) => {
          return <S.Box key={index} />;
        })}
      </S.Layout>
    </>
  );
};

export default UseScrollSelf02;
