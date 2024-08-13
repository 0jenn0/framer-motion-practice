import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";

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

/**
 * 스와이프 오프셋과 속도를 단일 변수로 정제하는 실험입니다.
 * 이를 통해 사용자가 스와이프한 거리가 짧을수록,
 * 스와이프로 인식되기 위해 필요한 속도가 더 빨라집니다.
 * 이는 단순히 거리 임계값과 속도 > 0 만을 확인하는 이진 검사 없이
 * 긴 스와이프와 짧은 플릭 모두를 수용할 수 있어야 합니다.
 */
const swipeConfidenceThreshold = 10_000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // 우리는 단 3개의 이미지만 가지고 있지만, 이를 절대적으로 페이지네이션합니다 (즉, 1, 2, 3, 4, 5...).
  // 그리고 나서 이를 0-2 사이로 감싸서 아래 배열에서 우리의 이미지 ID를 찾습니다.
  // `motion` 컴포넌트의 `key` prop으로 절대 페이지 인덱스를 전달함으로써,
  // `AnimatePresence`는 이를 완전히 새로운 이미지로 감지합니다.
  // 따라서 단 1개의 이미지만으로도 무한 페이지네이션을 할 수 있습니다.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
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
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
