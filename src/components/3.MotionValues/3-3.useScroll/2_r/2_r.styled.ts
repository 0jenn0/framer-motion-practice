import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Box = styled.div`
  background-color: #fff;
  min-width: 10rem;
  height: 12rem;
`;

export const Layout = styled.div`
  width: 20rem;
  height: 100%;
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const DD = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff;
`;

export const ProgressSvg = styled.svg`
  width: 100px;
  height: 100px;
  transform: rotate(-90deg); // 원을 12시 방향부터 채우기 위해 회전
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 8;
`;

export const CircleIndicator = styled(motion.circle)`
  fill: none;
  stroke: #e0e0e0;
  stroke-width: 8;
  stroke-linecap: round;
`;
