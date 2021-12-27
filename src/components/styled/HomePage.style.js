import styled from "styled-components";
import HomePage from "../HomePage";

export const StyledHomePage = styled(HomePage)`
  margin: 50px 5% 0 5%;
  
  h1 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 50px;
    letter-spacing: 3px;
  }

  h4 {
    font-weight: 300;
  }

  .sale {
    border: solid 3px #FFC3E8;
    border-radius: 4px;
    margin-bottom: 80px;

    & h4 {
      color: #FFC3E8;
    }  
  }
  
  .featured {
      border: solid 3px #C3FFDA;
      border-radius: 4px;

    & h4 {
      color: #C3FFDA;
    }
  }


 
`;