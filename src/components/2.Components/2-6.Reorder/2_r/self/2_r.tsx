import { useState } from "react";
import * as S from "./2_r.styled";
import { IoIosClose } from "react-icons/io";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import { addItem, deleteItem } from "./array-util";

interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const variants = {
  enter: {
    y: 10,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

const ReorderSelf02 = () => {
  const [items, setItems] = useState<Ingredient[]>(
    [...allIngredients].slice(0, 3)
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleReorder = (newOrder: unknown[]) => {
    if (
      newOrder.every(
        (item): item is Ingredient =>
          typeof item === "object" &&
          item !== null &&
          "icon" in item &&
          "label" in item
      )
    ) {
      setItems(newOrder as Ingredient[]);
      setSelectedIndex(
        [...(newOrder as Ingredient[])].indexOf(items[selectedIndex])
      ); // 이 부분 꼭 글쓰기에 남기기
    }
  };

  const handleDeleteItem = (e: React.MouseEvent, item: Ingredient) => {
    e.preventDefault();
    e.stopPropagation();
    const newItems = [...items];
    deleteItem(item, newItems);
    if (items.indexOf(item) === selectedIndex) {
      const newSelectedIndex =
        items.indexOf(item) === 0
          ? 1
          : items.indexOf(item) === items.length - 1
          ? newItems.length - 1
          : items.indexOf(item);
      setSelectedIndex(newSelectedIndex);
    } else {
      setSelectedIndex((prev) => prev - 1);
    }

    setItems(newItems);
  };

  const handleAddItem = () => {
    const newItems = [...items];
    addItem(allIngredients, newItems);

    setItems(newItems);
    setSelectedIndex(newItems.length - 1);
  };

  return (
    <S.Layout>
      <S.Header>
        <S.MotionReorderList axis="x" onReorder={handleReorder} values={items}>
          {items.map((item, index) => (
            <S.MotionReorderItem
              key={item.label} // 필수
              value={item}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              <S.Text>{`${item.icon} ${item.label}`}</S.Text>
              <S.RectButton
                title="delete button"
                type="button"
                onClick={(e) => handleDeleteItem(e, item)}
                whileTap={{ scale: 0.85 }}
              >
                <IoIosClose />
              </S.RectButton>
            </S.MotionReorderItem>
          ))}
        </S.MotionReorderList>
        <S.CircleButton
          title="add button"
          type="button"
          onClick={handleAddItem}
          whileTap={{ scale: 0.85 }}
        >
          <HiOutlinePlusSmall />
        </S.CircleButton>
      </S.Header>
      <AnimatePresence>
        <S.MotionContent
          key={selectedIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.2 },
          }}
        >
          {items[selectedIndex]["icon"]}
        </S.MotionContent>
      </AnimatePresence>
    </S.Layout>
  );
};

export default ReorderSelf02;
