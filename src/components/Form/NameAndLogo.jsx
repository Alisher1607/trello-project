import React from "react";
import { H1, Image, Logo, MainContainer } from "../../StyleApp";
import logo from "../../images/trelloLogo.jpg";

const NameAndLogo = () => {
  return (
    <MainContainer>
      <Logo>
        <Image src={logo} alt="logo" />
        <H1>Trello</H1>
      </Logo>
    </MainContainer>
  );
};

export default NameAndLogo;
