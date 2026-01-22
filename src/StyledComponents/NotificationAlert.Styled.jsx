import styled from "styled-components";

export const NotificationContainer = styled.div`
  z-index: 999999999;
  position: absolute;
  top: 0%;
  top: ${({ $isShow }) => ($isShow ? "0%" : "-30%")};
  left: 20%;
  right: 20%;

  background-color: hsl(0, 70%, 70%);
  padding: 20px 15px;
  border-radius: 10px;
  color: black;
  user-select: none;
  -webkit-user-select: none;

  transition: 0.8s linear;
  opacity: ${({ $isShow }) => ($isShow ? "1" : "0")};
  /* opacity: 1; */

  & > h2 {
    text-align: center;
    font-size: 25px;
    margin-bottom: 10px;
  }

  & > button {
    position: absolute;
    right: 5% ;
    top: 8% ;

    /* padding: 5px ; */
    /* font-weight: bold; */
    cursor: pointer ;
    font-size: 30px ;
    background-color: transparent;
    border: 1px solid black ;
    padding: 0px 6px ;
  }

  & > p {
    text-align: justify;
    text-align-last: center;
    font-size: 22px;
  }

  @media screen and (max-width: 700px) {
    & > h2, p {
      font-size: 20px ;
    }
  }
  @media screen and (max-width: 500px) {
    left: 0% ;
    right: 0% ;
    top: 6% ;
    padding: 5px ;

    & > h2, p {
      font-size: 20px ;
    }
    & > button {
      font-size: 25px;
      top: 2%;
    }
  }
`;
