import * as S from "./1_r.styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { images } from "./image-data";
import { wrap } from "popmotion";

type Page = number[];

const DIRECTION = {
  prev: -1,
  next: 1,
} as const;

const CarouselSelf = () => {
  const [[page, direction], setPage] = useState<Page>([0, 0]);

  const handlePage = (newDirection: keyof typeof DIRECTION) => {
    setPage([page + DIRECTION[newDirection], DIRECTION[newDirection]]);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1_000 : -1_000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1_000 : -1_000,
        opacity: 0,
      };
    },
  };

  // wrap(최소값(포함): number, 최대값(미포함): number, 현재값: number): number
  const imageIndex = wrap(0, images.length, page);

  return (
    <AnimatePresence custom={direction} initial={false}>
      <S.Layout>
        <motion.img
          key={page} // 얘 없으면 처음애만 애니메이션 되고 그다음부터 안됨
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        />
        <S.ButtonContainer>
          <S.Button onClick={() => handlePage("prev")}>
            <IoIosArrowBack />
          </S.Button>
          <S.Button onClick={() => handlePage("next")}>
            <IoIosArrowForward />
          </S.Button>
        </S.ButtonContainer>
      </S.Layout>
    </AnimatePresence>
  );
};

export default CarouselSelf;
