import { Reorder } from "framer-motion";
import { useState } from "react";
import * as S from "./4_r.styled";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const ReorderSelf04 = () => {
  const [items, setItems] = useState(initialItems);

  const handleReorder = (newOrder: unknown[]) => {
    if (newOrder.every((item): item is string => typeof item === "string")) {
      setItems(newOrder);
    }
  };

  return (
    <S.MotionReorderList
      axis="y"
      onReorder={handleReorder}
      values={items}
      layoutScroll
    >
      {items.map((item) => (
        <S.MotionReorderItem key={item} value={item} id={item}>
          <span>{item}</span>
        </S.MotionReorderItem>
      ))}
    </S.MotionReorderList>
  );
};

export default ReorderSelf04;
