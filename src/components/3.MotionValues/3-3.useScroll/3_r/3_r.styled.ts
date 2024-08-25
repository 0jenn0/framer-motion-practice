import styled from "@emotion/styled";

export const Box = styled.div`
  border: red 3px dotted;
  width: 10rem;
  height: 16rem;
`;

export const Layout = styled.div`
  background-color: #000;
  width: 40rem;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  justify-content: center;
`;

export const ProgressSvg = styled.svg`
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
`;

export const Progress = styled.div`
  position: sticky;
  top: 20px;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 5%;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  position: relative;
`;
