/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import * as S from "./1_r.styled";
import { useAnimationFrame } from "framer-motion";

const UseAnimationFrameSelf01 = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (ref.current) {
      const rotate = Math.sin(t / 10_000) * 200;
      const y = (1 + Math.sin(t / 1_000)) * -50;
      ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    }
  });

  return (
    <>
      <S.CubeContainer ref={ref}>
        <div css={[S.sideStyle, S.frontStyle]} />
        <div css={[S.sideStyle, S.leftStyle]} />
        <div css={[S.sideStyle, S.rightStyle]} />
        <div css={[S.sideStyle, S.topStyle]} />
        <div css={[S.sideStyle, S.bottomStyle]} />
        <div css={[S.sideStyle, S.backStyle]} />
      </S.CubeContainer>
    </>
  );
};

export default UseAnimationFrameSelf01;
