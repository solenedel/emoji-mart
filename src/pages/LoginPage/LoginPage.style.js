import styled from "styled-components";
import LoginPage from "./LoginPage";

export const StyledLoginPage = styled(LoginPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;

  div#current-user-status {
    margin-top: 30px;
  }

  form#login-form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    & .icon {
      margin-right: 15px;
    }

    & span {
      margin-bottom: 25px;
    }
  }

  & button#login-btn {
    margin-top: 40px;
    margin-left: 10px;
    width: 130px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background: #a8ffaf;
    align-self: center;

    &:hover {
      background: #78f282;
    }
  }
`;
