import styled from "@emotion/styled";
import { Reorder, motion } from "framer-motion";

export const Layout = styled.div`
  background-color: #fff;
  width: 32rem;
  height: 28rem;

  border-radius: 0.8rem;
  overflow: hidden;
`;

export const Header = styled.div`
  with: 100%;
  gap: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
`;

export const CircleButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const MotionReorderList = styled(Reorder.Group)`
  display: flex;
  flex: 1;
  justify-content: flex-star;
  gap: 0.4rem;
  overflow-x: auto;
  padding: 0;
  margin: 0.4rem 0 0 0.4rem;
`;

export const Text = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const MotionReorderItem = styled(Reorder.Item)<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: #000;
  background: ${({ isSelected }) => (isSelected ? "white" : "yellow")};
  padding: 0.4rem 0.8rem;
  cursor: pointer;
`;

export const MotionContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 6rem;
`;
