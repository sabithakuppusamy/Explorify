import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import {
  ExplorifyLogo,
  FlexColumn,
  Header,
  HeaderContentContainer,
  HeaderTitle,
  LogoutText,
  Sidebar,
} from "../../../styles";
import SidebarNavigation from "./SidebarNavigation";

const Layout = (props: any) => {
  const isLoggedIn = !!props.token;
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
          <ExplorifyLogo
            width={70}
            height={70}
            alt="spotify icon"
            className="p-2"
            src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png"
          ></ExplorifyLogo>
          <HeaderContentContainer>
            <HeaderTitle>Explorify</HeaderTitle>
            {isLoggedIn && (
              <LogoutText onClick={props.handleLogout}>Logout</LogoutText>
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
