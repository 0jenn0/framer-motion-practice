import { useMotionValue, useVelocity } from "framer-motion";
import { useEffect, useState } from "react";
import * as S from "./1_r.styled";

const UseVelocitySelf01 = () => {
  const x = useMotionValue(0);
  const xVelocity = useVelocity(x);
  const [xVelocityValue, setXVelocityValue] = useState(() => 0);

  // onChange는 deprecated될 예정
  //   useEffect(() => {
  //     return xVelocity.onChange((latestVelocity) => {
  //       console.log("Velocity", latestVelocity);
  //     });
  //   }, []);

  useEffect(() => {
    const unsubscribe = xVelocity.on("change", (latestVelocity) => {
      console.log("Velocity", latestVelocity);
      setXVelocityValue(latestVelocity);
    });
    return () => unsubscribe();
  }, [xVelocity]);

  return (
    <S.Layout>
      <S.Text>아래 애를 x축 방향으로 드래그해보세요 ~</S.Text>
      <S.Wrapper drag="x" dragConstraints={{ left: 0, right: 0 }} style={{ x }}>
        ㅇㅅㅇ
      </S.Wrapper>
      <label>xVelocity</label>
      <p> {xVelocityValue}</p>
    </S.Layout>
  );
};

export default UseVelocitySelf01;
