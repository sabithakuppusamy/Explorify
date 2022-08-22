import React from "react";
import { Foot, FooterContent, FooterContentContainer } from "../../../styles";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = ({ isLoggedIn, isMobile }: any) => {
  return (
    <Foot isLoggedIn={isLoggedIn}>
      <FooterContentContainer>
        <FooterContent isMobile={isMobile}>
          Developed by Sabitha Kuppusamy
        </FooterContent>
        <SocialMediaIcons isMobile={isMobile} />
      </FooterContentContainer>
    </Foot>
  );
};

export default Footer;
