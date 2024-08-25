import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40rem;

  scroll-snap-align: start;
  perspective: 500px;
`;

export const Image = styled.img`
  width: 20rem;
`;

export const MotionText = styled(motion.div)`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  z-index: 1;

  margin-left: -1rem;
`;
