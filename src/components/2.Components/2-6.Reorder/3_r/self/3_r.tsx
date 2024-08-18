import { useState } from "react";
import * as S from "./3_r.styled";
import { DragControls, useDragControls } from "framer-motion";
import { RiDraggable } from "react-icons/ri";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const ReorderSelf03 = () => {
  const [items, setItems] = useState(initialItems);

  const handleReorder = (newOrder: unknown[]) => {
    if (newOrder.every((item): item is string => typeof item === "string")) {
      setItems(newOrder);
    }
  };

  return (
    <S.MotionReorderList axis="y" onReorder={handleReorder} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} /> // key를 여기서 줘야 정상작동 여기서 안주고 Item 내부에서 받은 item으로 key 주면 제대로 동작안함...
      ))}
    </S.MotionReorderList>
  );
};

export default ReorderSelf03;

const Item = ({ item }: { item: string }) => {
  const dragControls = useDragControls();

  return (
    <S.MotionReorderItem
      value={item}
      id={item}
      dragListener={false}
      dragControls={dragControls}
    >
      <span>{item}</span>
      <DragIcon dragControls={dragControls} />
    </S.MotionReorderItem>
  );
};

const DragIcon = ({ dragControls }: { dragControls: DragControls }) => {
  return (
    <div onPointerDown={(e) => dragControls.start(e)}>
      <RiDraggable />
    </div>
  );
};
