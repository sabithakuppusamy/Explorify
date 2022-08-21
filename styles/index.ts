import { gradientAnimation } from "./animation";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const BlackGradient = css`
  background: linear-gradient(-45deg, #000, rgb(25,25,25), #000);
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-size: 400% 400%;
  color: white;
  animation ${gradientAnimation} 15s ease alternate infinite;
`;

export const Header = styled.div`
  ${BlackGradient};
  top: 0;
  opacity: 0.8;
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
  display: flex;
  flex-direction: column;
`;
export const Foot = styled.div`
  ${BlackGradient};
  bottom: 0;
  flex-direction: column;
  min-height: 6vh;
  align-items: center;
  justify-content: center;
  padding: 10px;
  opacity: ${(props: { isLoggedIn: boolean }) => !props.isLoggedIn && `0.8`};
  background: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn && `linear-gradient(-45deg, #000,rgb(24,24,24),#000)`};
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
  background: linear-gradient(90deg, #000, rgb(25, 25, 25), #000);
  animation: ${gradientAnimation} 15s ease alternate infinite;
  background-size: 400% 400%;
  min-width: 40vw;
  height: auto;
  margin: auto;
  opacity: 0.8;
  color: white;
`;

export const Wrapper: any = styled.div`
  color: white;
  margin-top: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn && `2.5rem`};

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

export const LogoutText = tw.h5`text-center font-thin text-sm cursor-pointer hover:text-lg 
transition-all hover:font-light`;

export const LoginContainer = tw.div`flex flex-col h-[100vh] justify-center align-middle`;

export const LoginContent = tw.div`inline-flex flex-row justify-center align-middle mx-auto my-0
 gap-2 p-2 bg-black rounded-sm shadow-md hover:bg-[#575556] cursor-pointer`;

export const LoginWithSpotify = tw.img`m-auto`;

export const LoginHeading = tw.p`text-2xl font-thin`;

export const LoginDescription = tw.p`text-sm font-thin`;

export const LoginText = tw.a`text-left font-normal text-sm mt-1`;

export const SidebarHeader = tw.div`flex flex-row h-[70px] w-full items-center gap-4 m-4`;

export const SidebarContent = tw.div`flex flex-col m-4 w-full`;

export const SidebarHeading = tw.div`mb-4 font-extralight text-2xl`;

export const ArtistListContainer = tw.div`w-[95%] flex flex-row flex-wrap justify-between gap-4 h-[60vh] overflow-y-auto`;

export const ArtistList = tw.div`w-full flex gap-2 items-center cursor-pointer hover:bg-[rgb(23,22,22)]`;

export const ArtistImage = tw.img`block rounded-lg`;

export const ArtistName = tw.span`font-normal`;

export const ExplorifyLogo = tw.img``;

export const MainContentContainer = tw.div`ml-72`;

export const MainContentHeading = tw.div`mx-auto px-12 text-2xl ml-4 font-extralight`;

export const FilterTag = tw.div`ml-16 mt-4 inline-flex items-center gap-4 p-2 bg-black w-auto`;

export const FilterName = tw.p`font-thin`;

export const TrackContainer = tw.div`container my-12 mx-auto px-12 mb-20`;

export const FlexRowWrap = tw.div`flex flex-wrap flex-row`;

export const TrackCard = tw.div`w-1/3 my-4 px-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-default`;

export const TrackCardArticle = tw.article`overflow-hidden rounded-lg shadow-lg bg-[rgb(14,14,14)]`;

export const TrackImage = tw.img`block h-auto w-full`;

export const TrackHeader = tw.header`flex items-center justify-between leading-tight p-2 md:p-4`;

export const TrackDetailContainer = tw.div`text-lg w-[95%] flex justify-between gap-2`;

export const TrackName = tw.p`cursor-default no-underline hover:underline text-white 
whitespace-nowrap overflow-hidden overflow-ellipsis block`;

export const SpotifyImageContainer = tw.a``;

export const SpotifyImage = tw.img`cursor-pointer`;

export const TrackArtistFooter = tw.footer`flex items-center justify-between p-2 md:p-4`;

export const TrackArtistContainer = tw.div`flex items-center no-underline hover:underline text-white`;

export const TrackArtistImage = tw.img`block rounded-full`;

export const TrackArtistName = tw.p`ml-2 text-sm cursor-default`;
