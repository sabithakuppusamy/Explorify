import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import {
  ExplorifyLogo,
  FlexColumn,
  Header,
  HeaderContentContainer,
  HeaderTitle,
  MainContentHeading,
  WelcomeText,
} from "../../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Layout = (props: any) => {
  const isLoggedIn = !!props.token;
  const [greetingsText, setGreetingsText] = useState("Good Day!");
  useEffect(() => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setGreetingsText("Good Morning!");
    } else if (curHr < 18) {
      setGreetingsText("Good Afternoon!");
    } else {
      setGreetingsText("Good Evening!");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Explorify</title>
        <link
          rel="icon"
          href="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png"
        />
      </Head>
      <FlexColumn>
        <Header isLoggedIn={isLoggedIn}>
          {!isLoggedIn && (
            <ExplorifyLogo
              width={"50vw"}
              height={"60vw"}
              alt="spotify icon"
              className="m-[2vw]"
              src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png"
            ></ExplorifyLogo>
          )}
          <HeaderContentContainer>
            {!isLoggedIn && <HeaderTitle>Explorify</HeaderTitle>}
            {isLoggedIn && (
              <>
                <MainContentHeading>
                  Hello, <WelcomeText>{greetingsText}</WelcomeText>
                </MainContentHeading>
                <FontAwesomeIcon
                  icon={faSignOut}
                  onClick={props.handleLogout}
                  className="text-white w-[1.5vw] cursor-pointer mr-[3vw] hover:w-[1.8vw]"
                ></FontAwesomeIcon>
              </>
            )}
          </HeaderContentContainer>
        </Header>
        {props.children}
        <Footer isLoggedIn={isLoggedIn} />
      </FlexColumn>
    </>
  );
};

export default Layout;
