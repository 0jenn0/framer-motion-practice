import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Layout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: red;
  height: 0.6rem;
  transform-origin: 0%;
`;
