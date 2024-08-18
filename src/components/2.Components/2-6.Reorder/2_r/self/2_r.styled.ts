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
  padding-right: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0.4rem 0.4rem 0 0.4rem;
`;

export const CircleButton = styled(motion.button)`
  border-radius: 100%;
  background-color: #ededed;
  padding: 0.4rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #000;
  cursor: pointer;
`;

export const RectButton = styled(motion.button)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 0.3rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;

export const MotionReorderList = styled(Reorder.Group)`
  display: flex;
  width: 100%;
  justify-content: flex-star;
  align-items: center;
  overflow-x: auto;
  padding: 0;
  margin: 0;
`;

export const Text = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-weight: 800;
`;

export const MotionReorderItem = styled(Reorder.Item)<{ isSelected: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  color: #000;
  background: ${({ isSelected }) => (isSelected ? "#ededed" : "#fff")};
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 0.4rem 0.4rem 0 0;
  min-width: 8rem;
`;

export const MotionContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 6rem;
`;
