import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
export const MotionItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: red;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-weight: 700;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const MotionButton = styled(motion.button)`
  padding: 1.2rem;
  width: 10rem;
  background-color: red;
  border-radius: 4rem;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;
