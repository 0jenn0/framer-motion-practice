import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import * as S from "./1_r.styled";

const UseMotionTemplateSelf01 = () => {
  const shadowX = useSpring(0);
  const shadowY = useMotionValue(0);

  const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`;

  return (
    <S.MotionDiv
      drag="x"
      dragConstraints={{ right: 0, left: 0 }}
      style={{ x: shadowX, y: shadowY, filter: shadow }}
    />
  );
};

export default UseMotionTemplateSelf01;
