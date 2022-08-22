import React from "react";
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContainer } from "../../../styles";

const SocialMediaIcons = ({ isMobile }: any) => {
  return (
    <IconContainer>
      <FontAwesomeIcon
        icon={faTwitter}
        onClick={() => {
          window.open("https://twitter.com/sabi95oct", "_blank");
        }}
        className={`text-white ${isMobile ? "w-[2vw]" : "w-[1.2vw]"}`}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        onClick={() => {
          window.open("https://codepen.io/sabitha_kuppusamy", "_blank");
        }}
        icon={faCodepen}
        className={`text-white ${isMobile ? "w-[2vw]" : "w-[1.2vw]"}`}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/sabitha-kuppusamy-00748190/",
            "_blank"
          );
        }}
        icon={faLinkedin}
        className={`text-white ${isMobile ? "w-[2vw]" : "w-[1.2vw]"}`}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faGithub}
        onClick={() => {
          window.open("https://github.com/sabithakuppusamy", "_blank");
        }}
        className={`text-white ${isMobile ? "w-[2vw]" : "w-[1.2vw]"}`}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        onClick={() => {
          location.href = "mailto:sabi95oct@gmail.com";
        }}
        icon={faEnvelope}
        className={`text-white ${isMobile ? "w-[2vw]" : "w-[1.2vw]"}`}
      ></FontAwesomeIcon>
    </IconContainer>
  );
};

export default SocialMediaIcons;
