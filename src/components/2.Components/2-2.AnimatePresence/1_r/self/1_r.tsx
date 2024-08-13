import * as S from "./1_r.styled";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { images } from "./image-data";
import { wrap } from "popmotion";

type Page = number[];

const DIRECTION = {
  next: -1,
  prev: 1,
} as const;

const CarouselSelf = () => {
  const [[page, direction], setPage] = useState<Page>([0, 0]);

  const handlePage = (newDirection: keyof typeof DIRECTION) => {
    setPage(([prevPage, prevDirection]) => [
      prevPage + DIRECTION[newDirection],
      DIRECTION[newDirection],
    ]);
  };

  const imageIndex = wrap(0, images.length, page);

  return (
    <>
      <S.Layout>
        <motion.img src={images[imageIndex]} />
        <S.ButtonContainer>
          <S.Button onClick={() => handlePage("prev")}>
            <IoIosArrowBack />
          </S.Button>
          <S.Button onClick={() => handlePage("prev")}>
            <IoIosArrowForward />
          </S.Button>
        </S.ButtonContainer>
      </S.Layout>
    </>
  );
};

export default CarouselSelf;
