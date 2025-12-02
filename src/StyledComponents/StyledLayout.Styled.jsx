import Styled from "styled-components";

export const StyledLayout = Styled.div`
  display: flex ;
  flex-direction: column ;
  /* gap: 20px ; */
  
  /* & > main {
    padding: 15px ;
  } */

  /* @media screen and (max-width: 800px) {
    gap: 10px ;
  } */


  & > main {
    margin-top: var(---navbar-resize-default-width) ;

    @media screen and (max-width: 700px) {
      margin-top: var(--navbar-resize-700px-width) ;
    }
    @media screen and (max-width: 399px) {
      margin-top: var(--navbar-resize-399px-width) ;
    }
  }

`;
