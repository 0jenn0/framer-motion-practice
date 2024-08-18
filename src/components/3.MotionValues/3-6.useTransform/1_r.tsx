// import { useMotionValue, useTransform, useVelocity } from "framer-motion";
// import { useEffect, useState } from "react";
// import * as S from "./1_r.styled";

// const variants = {
//   enter: {
//     opacity: 0,
//   },
//   center: (mappingVelocity: number) => {
//     return {
//       opacity: mappingVelocity > 0.5 ? 1 : 0,
//     };
//   },
// };

// const UseTransformSelf01 = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const xVelocity = useVelocity(x);
//   const yVelocity = useVelocity(y);
//   const velocity = useTransform(() =>
//     Math.abs(xVelocity.get() + yVelocity.get())
//   );
//   const mappingVelocity = useTransform(velocity, [0, 60], [1, 1.2]);

//   useEffect(() => {
//     const unsubscribe1 = velocity.on("change", (latestVelocity) => {
//       console.log("Velocity", latestVelocity);
//     });
//     const unsubscribe2 = mappingVelocity.on("change", (latestVelocity) => {
//       console.log("MappingVelocity", latestVelocity);
//     });

//     return () => {
//       unsubscribe1();
//       unsubscribe2();
//     };
//   }, [velocity]);

//   return (
//     <S.Layout>
//       <S.Text>아래 애를드래그해보세요 ~</S.Text>
//       <S.Wrapper
//         layout
//         drag
//         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//         style={{ x, y, scale: mappingVelocity }}
//       >
//         ㅇㅅㅇ
//       </S.Wrapper>
//     </S.Layout>
//   );
// };

// export default UseTransformSelf01;

import { useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import * as S from "./1_r.styled";

const UseTransformSelf01 = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useVelocity 대신 useSpring 사용
  const xVelocity = useSpring(x, { damping: 50, stiffness: 400 });
  const yVelocity = useSpring(y, { damping: 50, stiffness: 400 });

  // 속도 계산 최적화
  const velocity = useTransform(
    [xVelocity, yVelocity],
    ([latestX, latestY]: number[]) =>
      Math.sqrt(latestX * latestX + latestY * latestY)
  );

  // 매핑 범위 조정 및 스프링 효과 추가
  const scale = useSpring(useTransform(velocity, [0, 500], [1, 2]), {
    damping: 25,
    stiffness: 200,
  });

  useEffect(() => {
    const unsubscribe = scale.on("change", (latestScale) => {
      console.log("Scale", latestScale);
    });

    return () => unsubscribe();
  }, [scale]);

  return (
    <S.Layout>
      <S.Text>아래 애를 드래그해보세요 ~</S.Text>
      <S.Wrapper
        layout
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        style={{ x, y, scale }}
      >
        ㅇㅅㅇ
      </S.Wrapper>
    </S.Layout>
  );
};

export default UseTransformSelf01;
