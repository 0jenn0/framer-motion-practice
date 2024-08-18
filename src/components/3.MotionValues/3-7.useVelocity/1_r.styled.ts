import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  padding: 1rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2;
  font-weight: 700;
  background-color: #fff;
  color: #000;
`;

export const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
