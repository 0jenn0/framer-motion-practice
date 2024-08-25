import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Layout = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;

  background-color: #e62c2c;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const MotionDiv = styled(motion.div)`
  height: 0.2rem;
  background-color: #fff;
  width: 40rem;
`;
