import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 30rem;
  height: 24rem;
  position: relative;
  overflow: hidden;
  background: black;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: none;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
