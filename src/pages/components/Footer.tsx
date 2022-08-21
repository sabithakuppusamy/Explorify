import React from "react";
import { Foot, FooterContent, FooterContentContainer } from "../../../styles";
import { SocialMediaIcons } from "./SocialMediaIcons";

const Footer = ({ isLoggedIn }: any) => {
  return (
    <Foot isLoggedIn={isLoggedIn}>
      <FooterContentContainer>
        <FooterContent>Developed by Sabitha Kuppusamy</FooterContent>
        <SocialMediaIcons />
      </FooterContentContainer>
    </Foot>
  );
};

export default Footer;
