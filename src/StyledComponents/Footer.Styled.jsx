import styled from "styled-components";

const FooterDiv = styled.div`
  position: relative;
  height: 250px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--footer--background-color);
    z-index: -1;
  }

  & > .FooterDiv__curved-div {
    position: absolute;
    inset: 0;
    display: flex;
    z-index: -1;

    & > svg {
      height: 100%;
      width: 100%;

      & > path {
        fill: var(--footer__curved-div--background-color);
      }
    }
  }

  & > .FooterDiv__info-div {
    height: 100%;
    width: 100%;
    z-index: 10;

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    & > p {
      color: var(--font-color-opposite);
      font-size: 25px;
    }

    & > p.info-div__copy-right {
      font-size: 20px;
      font-family: "Dancing Script";
      font-weight: 900;

      position: absolute;
      left: 0;
      bottom: 3%;
    }

    & > .info-div__links {
      display: flex;
      flex-direction: row;
      gap: 30px;

      & a {
        color: var(--font-color-opposite);
        font-size: 35px;
        transition: color 0.2s;

        &:hover {
          color: blue;
        }
      }
    }
  }

  @media screen and (max-width: 499px) {
    & > .FooterDiv__info-div {
      & .info-div__links {
        gap: 20px;

        & a {
          font-size: 25px;
        }
      }

      & > p.info-div__copy-right {
        font-size: 18px;
      }
    }
  }
`;

export default FooterDiv;
