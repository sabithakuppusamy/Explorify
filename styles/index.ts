import { gradientAnimation } from "./animation";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const BlackGradient = css`
  background: linear-gradient(-45deg, #000, #575556, #000);
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-size: 400% 400%;
  color: white;
  animation ${gradientAnimation} 35s ease alternate infinite;
`;

export const Header = styled.div`
  ${BlackGradient};
  top: 0;
  background: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn && `transparent`};
`;
export const Sidebar = styled.div`
  ${BlackGradient};
  top: 0;
  min-height: 100vh;
  overflow-y: auto;
  width: 20%;
  background: #000;
`;
export const Foot = styled.div`
  ${BlackGradient};
  bottom: 0;
  flex-direction: column;
  min-height: 6vh;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn && `linear-gradient(-45deg, #000,  rgb(24,24,24),#000)`};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  row-gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 30px 20px 30px;
  background: linear-gradient(45deg, #575556, #000);
  animation: ${gradientAnimation} 20 ease alternate infinite;
  background-size: 100% 100%;
  min-width: 40vw;
  height: auto;
  margin: auto;
  opacity: 0.9;
  color: white;
`;

export const Wrapper: any = styled.div`
  color: white;
  margin-top: 2.5rem;

  background-image: ${(props: { isLoggedIn: boolean }) =>
    !props.isLoggedIn &&
    `url('https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80')`};
`;

export const FlexColumn = tw.div`flex flex-col`;

export const HeaderContentContainer = tw.div`flex flex-row justify-between w-full items-center mr-4`;

export const HeaderTitle = tw.h2`text-center font-thin text-3xl`;

export const FooterContentContainer = tw.div`flex flex-col items-center justify-center`;

export const FooterContent = tw.div`flex items-center justify-center gap-2 text-center font-thin`;

export const IconContainer = tw.div`flex gap-2 cursor-pointer`;

export const LogoutText = tw.h5`text-center font-thin text-sm cursor-pointer hover:text-lg transition-all hover:font-light`;

export const LoginContainer = tw.div`flex flex-col h-[100vh] justify-center align-middle`;

export const LoginContent = tw.div`flex flex-row justify-center align-middle mx-auto my-0 gap-2`;

export const LoginWithSpotify = tw.img`m-auto`;

export const LoginHeading = tw.p`text-2xl font-thin`;

export const LoginDescription = tw.p`text-sm font-thin`;

export const LoginText = tw.a`text-left font-thin text-sm mt-1`;

export const SidebarHeader = tw.div`flex flex-row h-[70px] w-full items-center gap-4 m-4`;

export const ExplorifyLogo = tw.img``;
