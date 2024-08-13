import { LayoutGroup, motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";

const Tabs = () => {
  const [focused, setFocused] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState("Item 1");
  const tabs = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul onMouseLeave={() => setFocused(null)} className={styles.wrapper}>
      {tabs.map((item) => (
        // <Tab
        <li
          key={item}
          className={styles.tab}
          onClick={() => setSelected(item)}
          onKeyDown={(event: { key: string }) =>
            event.key === "Enter" ? setSelected(item) : null
          }
          onFocus={() => setFocused(item)}
          onMouseEnter={() => setFocused(item)}
          tabIndex={0}
        >
          <span className={styles.item}>{item}</span>
          {focused === item ? (
            <motion.div
              transition={{
                layout: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              style={{
                position: "absolute",
                bottom: "-2px",
                left: "-10px",
                right: 0,
                width: "140%",
                height: "110%",
                background: "#23272F",
                borderRadius: "8px",
                zIndex: 0,
              }}
              layoutId="highlight"
            />
          ) : null}
          {selected === item ? (
            <motion.div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "0px",
                right: 0,
                height: "4px",
                background: "#5686F5",
                borderRadius: "8px",
                zIndex: 0,
              }}
              layoutId="underline"
            />
          ) : null}
          {/* </Tab> */}
        </li>
      ))}
    </ul>
  );
};

const LayoutComponent4 = () => {
  return (
    // <> bad ❌
    //   <Tabs />
    //   <Tabs />
    // </>
    <>
      {/* good ✅ */}
      <LayoutGroup id="1">
        <Tabs />
      </LayoutGroup>
      <LayoutGroup id="2">
        <Tabs />
      </LayoutGroup>
    </>
  );
};

export default LayoutComponent4;

const FixedTabs = ({ id }: { id: string }) => {
  const [focused, setFocused] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState("Item 1");
  const tabs = ["Item 1", "Item 2", "Item 3"];

  return (
    <LayoutGroup id={id}>
      <ul onMouseLeave={() => setFocused(null)} className={styles.wrapper}>
        {tabs.map((item) => (
          <li
            key={item}
            className={styles.tab}
            onClick={() => setSelected(item)}
            onKeyDown={(event: { key: string }) =>
              event.key === "Enter" ? setSelected(item) : null
            }
            onFocus={() => setFocused(item)}
            onMouseEnter={() => setFocused(item)}
            tabIndex={0}
          >
            <span className={styles.item}>{item}</span>
            {focused === item ? (
              <motion.div
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "-10px",
                  right: 0,
                  width: "140%",
                  height: "110%",
                  background: "#23272F",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
                layoutId="highlight"
              />
            ) : null}
            {selected === item ? (
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "0px",
                  right: 0,
                  height: "4px",
                  background: "#5686F5",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </LayoutGroup>
  );
};
