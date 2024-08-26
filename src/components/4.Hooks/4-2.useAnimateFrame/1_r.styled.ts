import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CubeContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
`;

export const sideStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  opacity: 0.6;
`;

export const frontStyle = css`
  transform: rotateY(0deg) translateZ(100px);
  background-color: #ee4444;
`;

export const rightStyle = css`
  transform: rotateY(90deg) translateZ(100px);
  background-color: #ffcc00;
`;

export const backStyle = css`
  transform: rotateY(180deg) translateZ(100px);
  background-color: #ff0055;
`;

export const leftStyle = css`
  transform: rotateY(-90deg) translateZ(100px);
  background-color: #8855ff;
`;
export const topStyle = css`
  transform: rotateX(90deg) translateZ(100px);
  background-color: #0099ff;
`;

export const bottomStyle = css`
  transform: rotateX(-90deg) translateZ(100px);
  background-color: #22cc88;
`;
