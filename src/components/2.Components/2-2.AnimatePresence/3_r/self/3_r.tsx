import {
  AnimatePresence,
  motion,
  useIsPresent,
  usePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import * as S from "./3_r.styled";
import { deleteItem } from "./array";
import { FaS } from "react-icons/fa6";

const variants = {
  enter: {
    y: -10,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 10,
    opacity: 0,
  },
};

// const PopupItem = () => {
//   const [isPresent, safeToRemove] = usePresence();

//   return (
//     <motion.div
//       variants={variants}
//       onClick={() => safeToRemove}
//       //   custom={isPresent}
//       initial="enter"
//       animate="center"
//       exit="exit"
//     >
//       zzzzzzz
//     </motion.div>
//   );
// };

const PopOutSelf = () => {
  const count = useRef(0);
  const [items, setItems] = useState([0]);

  const handleClickItem = (id: number) => {
    const newItems = [...items];
    deleteItem({ arr: newItems, item: id });
    setItems(newItems);
  };

  return (
    <S.Layout>
      <S.MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          count.current++;
          setItems([...items, count.current]);
        }}
      >
        Add item
      </S.MotionButton>

      <AnimatePresence mode="popLayout" initial={false}>
        <S.List>
          {items.map((id: number) => (
            <S.MotionItem
              whileHover={{ scale: 1.05 }}
              key={id}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              onClick={() => handleClickItem(id)}
            >
              {id}
            </S.MotionItem>
          ))}
        </S.List>
      </AnimatePresence>
    </S.Layout>
  );
};

export default PopOutSelf;
