import styles from "./styles.module.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Markdown from "react-markdown";
import README from "./README.md";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // 추적할 요소
    offset: ["end end", "start start"], // offset은 스크롤 효과의 시작과 끝 지점을 정의
    /**
     * "end end": 요소의 끝이 뷰포트의 끝에 도달할 때 시작
     * "start start": 요소의 시작이 뷰포트의 시작에 도달할 때 끝
     */
  });

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.aa}>
        <figure className={styles.progress}>
          {/* 주로 이미지, 다이어그램, 사진, 코드 등 문서의 주요 흐름과는 독립적인 콘텐츠를 표현할 때 사용합니다. 종종 <figcaption> 요소와 함께 사용되어 해당 콘텐츠에 대한 캡션이나 설명을 제공합니다.
이 경우, SVG 프로그레스 바를 독립적인 그래픽 요소로 취급하기 위해 <figure> 태그를 사용했습니다. */}
          <svg
            id={styles.progress}
            className={styles.svg}
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle // 배경원
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className={`${styles.bg} ${styles.circle}`}
            />
            <motion.circle // 프로그래스 써클
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className={styles.indicator}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <p>dddd?</p>
      </div>
    </section>
  );
}

export default function ScrollComponent4() {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <div style={{ textAlign: "start", paddingLeft: "200px" }}>
        <Markdown>{README}</Markdown>
      </div>
    </>
  );
}
