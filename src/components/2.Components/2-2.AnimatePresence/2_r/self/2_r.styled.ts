import styled from "@emotion/styled";
import { motion } from "framer-motion";

// export const Button = styled(motion.button)`
//   background-color: #57eb64;
//   border: none;
//   padding: 1rem 2rem;
//   font-weight: 700;
//   font-size: 1.6rem;
//   border-radius: 4rem;
// `;

export const Button = styled(motion.button)`
  background-color: #57eb64;
  border: none;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  border-radius: 4rem;
  display: inline-block;
  white-space: nowrap;
`;

export const StyledMotionDiv = styled(motion.div)`
  background-color: #57eb64;
  color: black;
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
