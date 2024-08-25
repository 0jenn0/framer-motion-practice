import React, { Ref, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as S from "./Item.styled";
import { Image01, Image02, Image03, Image04, Image05 } from "../images";

const images = [Image01, Image02, Image03, Image04, Image05];

interface ItemProps {
  id: number;
  containRef: React.RefObject<HTMLElement>;
}

const Item = ({ id: index, containRef }: ItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containRef,
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const image = images[index];

  return (
    <S.Layout>
      <div ref={ref}>
        <S.Image src={image.src} alt={`Image ${index + 1}`} />
      </div>
      <S.MotionText layout style={{ y }}>{`#00${index + 1}`}</S.MotionText>
    </S.Layout>
  );
};

export default Item;
