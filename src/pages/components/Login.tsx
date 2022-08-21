import React from "react";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  SCOPE,
  REDIRECT_URI,
} from "../../../constant/const";
import {
  FormContainer,
  LoginContainer,
  LoginContent,
  LoginDescription,
  LoginHeading,
  LoginText,
  LoginWithSpotify,
  Wrapper,
} from "../../../styles";

export const Login = (props: any) => {
  const LOGIN_LINK = `${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;

  return (
    <Wrapper isLoggedIn={!!props.token}>
      <LoginContainer>
        <FormContainer>
          <LoginHeading>Welcome to Explorify!</LoginHeading>
          <LoginDescription>Explore your music taste.</LoginDescription>
          <LoginContent>
            <LoginWithSpotify
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              alt="spotify"
              width={30}
              height={30}
            />
            <LoginText href={LOGIN_LINK}>Login to Spotify</LoginText>
          </LoginContent>
        </FormContainer>
      </LoginContainer>
    </Wrapper>
  );
};
