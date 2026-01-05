import styled from "styled-components";

export const PageNotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 200px;

  & > h1 {
    font-size: 50px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > h3 {
      font-size: 35px;
    }

    & > button {
      font-size: 25px;
      padding: 10px;
      margin: 0px 25px;
      transition: 0.15s;

      border: 2px solid black;
      border-radius: 5px;
      cursor: pointer;

      background-color: ${({ $theme }) =>
        $theme === "white" ? "teal" : "hsl(0, 0%, 20%)"};
      color: ${({ $theme }) => ($theme === "white" ? "white" : "lightgray")};

      &:hover {
        background-color: ${({ $theme }) =>
          $theme === "white" ? "hsl(180, 100%, 20%)" : "hsl(0, 0%, 25%)"};
      }
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 300px;
  }

  @media screen and (max-width: 419px) {
    /* margin-top: 300px; */

    & > h1 {
      font-size: 30px ;
    }

    & > div {
      & > h3 {
      font-size: 23px ;
      }

      & > button {
        font-size: 23px ;
        padding: 8px ;
        margin: 0px 25px ;
      }
    }
  }
`;
