import React from "react";
import styled from "styled-components";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function Login() {
  return (
    <Div
      className="LoginContainer"
      display="flex"
      direction="column"
      justify="start"
      items="center"
      padding="14.125rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="LoginInputContainer"
        border="solid 1px black"
        display="flex"
        justify="center"
        items="center"
        margin="5.813rem 0 0 0"
        width="37.625rem"
        height="10.188rem"
      />
    </Div>
  );
}

export default Login;
