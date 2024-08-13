import { motion, Variants } from "framer-motion";
import styles from "./styles.module.css";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 10, // 음수가 시계 반대 방향으로 회전. 숫자 단위는 '도' 이다.
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={styles.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      /**
       * once: 한번만 애니메이션 동작
       * amount:요소가 얼마나 뷰포트 안에 들어와야 애니메이션이 트리거될지를 결정. 0~1사이값을 가져야함
       */
    >
      <div className={styles.splash} style={{ background }} />
      <motion.div className={styles.card} variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

export default function ScrollComponent2() {
  return (
    <>
      {food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </>
  );
}
