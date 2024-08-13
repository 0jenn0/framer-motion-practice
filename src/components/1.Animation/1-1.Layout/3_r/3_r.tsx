import styles from "./styles.module.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

const LayoutComponent3 = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={styles.window}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`${styles.li} ${
                item === selectedTab ? styles.selected : ""
              }`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className={styles.underline} layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {" "}
          // /** 참조 문서 :
          https://github.com/0jenn0/framer-motion-docs-ko/blob/master/Components/AnimatePresence.md
          */
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"} // AnimatePresence의 직접 자식들 중 exit 애니메이션 사용할 애들은 key props가 꼭 필요하다.
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }} // 음수가 y쪽 방향임
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default LayoutComponent3;
