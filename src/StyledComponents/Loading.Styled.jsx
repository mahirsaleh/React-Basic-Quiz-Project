import styled, { keyframes } from "styled-components";

const rotateLoading = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

export const LoadingDiv = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  top: 250px;

  & > div {
    height: 100px;
    width: 100px;
    border-radius: 50%;

    border: 12px solid
      ${({ $theme }) => ($theme === "white" ? "lightgray" : "gray")};
    border-top-color: ${({ $theme }) =>
      $theme === "white" ? "teal" : "lightgray"};

    animation: ${rotateLoading} 1.5s linear infinite;
  }
`;
