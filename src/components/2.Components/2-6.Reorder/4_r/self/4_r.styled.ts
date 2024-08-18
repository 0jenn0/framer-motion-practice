import styled from "@emotion/styled";
import { Reorder } from "framer-motion";

export const MotionReorderList = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: auto;
  height: 10rem;
  width: 16rem;
  padding: 0 1rem;
`;

export const MotionReorderItem = styled(Reorder.Item)`
  background-color: #fff;
  width: 100%;
  color: #000;
  text-align: start;
  padding: 1rem 1.6rem;
  border-radius: 0.6rem;

  list-style-type: none;
  margin: 0;
`;
