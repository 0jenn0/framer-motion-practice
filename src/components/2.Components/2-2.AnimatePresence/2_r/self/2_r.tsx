import { useState } from "react";
import * as S from "./2_r.styled";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (isShow: boolean) => {
    return {
      y: -10,
      opacity: 0,
    };
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (isShow: boolean) => {
    return {
      y: -10,
      opacity: 0,
    };
  },
};

const HideSelf = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow((prev) => !prev);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <S.Layout>
      <S.Button whileTap={{ scale: 0.95 }} onClick={toggleShow}>
        {isShow ? "Hide" : "Show"}
      </S.Button>
      <AnimatePresence custom={isShow}>
        {isShow && (
          <S.StyledMotionDiv
            //   key={isShow.toString()} 여기서는 왜 이거 없어도 잘 동작하는지 궁금
            custom={isShow}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: spring,
              opacity: { duration: 0.2 },
            }}
          >
            까꿍ㅋㅋ
          </S.StyledMotionDiv>
        )}
      </AnimatePresence>
    </S.Layout>
  );
};

export default HideSelf;
