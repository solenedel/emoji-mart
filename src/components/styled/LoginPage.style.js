import styled from "styled-components";
import LoginPage from "../LoginPage";

export const StyledLoginPage = styled(LoginPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;

  & button#demo-login-btn {
    margin-top: 40px;
    width: 320px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background: #a8ffaf;

    &:hover {
      background: #78f282;
    }
  }
`;
