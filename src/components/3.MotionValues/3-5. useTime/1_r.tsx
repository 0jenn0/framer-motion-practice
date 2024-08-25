import { useSpring, useTime, useTransform } from "framer-motion";
import * as S from "./1_r.styled";

const UseTimeSelf01 = () => {
  const time = useTime();
  const duration = 2000;

  const progress = useTransform(time, (t) => (t % duration) / duration);
  const scale = useTransform(progress, [0, 0.5, 1], [1, 1.2, 1]);

  const springScale = useSpring(scale);

  return <S.MotionDiv style={{ scale: springScale }} />;
};

export default UseTimeSelf01;
