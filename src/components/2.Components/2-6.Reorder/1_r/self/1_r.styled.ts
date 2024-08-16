import styled from "@emotion/styled";
import { Reorder } from "framer-motion";

export const MotionReorderList = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const MotionReorderItem = styled(Reorder.Item)`
  position: relative;
  background-color: #fff;
  color: #000;
  text-align: start;
  padding: 1rem 1.6rem;
  border-radius: 0.6rem;

  list-style-type: none;
  margin: 0;
`;
