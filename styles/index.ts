import { gradientAnimation, gradientTextAnimation } from "./animation";
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
  min-height: 6vh;
  opacity: ${(props: { isLoggedIn: boolean }) => props.isLoggedIn && `1`};
`;
export const Sidebar = styled.div`
  ${BlackGradient};
  top: 0;
  min-height: 100vh;
  overflow-y: auto;
  width: 25vw;
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
  padding: 1vw;
  opacity: ${(props: { isLoggedIn: boolean }) => !props.isLoggedIn && `0.8`};
  background: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn && `linear-gradient(-45deg, #000,rgb(24,24,24),#000)`};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #000, rgb(25, 25, 25), #000);
  animation: ${gradientAnimation} 15s ease alternate infinite;
  background-size: 400% 400%;
  height: auto;
  margin: auto;
  opacity: 0.8;
  color: white;
  padding: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `4vw` : `2vw`};
  min-width: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `70vw` : `45vw`};
`;

export const NoDataContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-auto w-[30vw] p-[2vw] mx-auto mt-[10vh]`};
  background: linear-gradient(90deg, #000, rgb(25, 25, 25), #000);
  animation: ${gradientAnimation} 15s ease alternate infinite;
`;

export const Wrapper: any = styled.div`
  color: white;
  min-height: 95vh;
  margin-top: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn && `2.5rem`};

  background: ${(props: { isLoggedIn: boolean }) =>
    props.isLoggedIn
      ? `linear-gradient(180deg, #000, rgb(35, 35, 35), #000)`
      : `url('https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80')`};
`;

export const HeaderTitle = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `6vw` : `2.5vw`};
  user-select: none;
  background: -webkit-linear-gradient(
    -45deg,
    rgb(248, 93, 111),
    rgb(55, 156, 254),
    rgb(248, 93, 111)
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientTextAnimation} 8s ease-in-out alternate infinite;
`;

export const WelcomeText = styled.span`
  background: -webkit-linear-gradient(
    -45deg,
    rgb(248, 93, 111),
    rgb(55, 156, 254),
    rgb(248, 93, 111)
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  animation: ${gradientTextAnimation} 8s ease-in-out alternate infinite;
`;

export const FlexColumn = tw.div`flex flex-col`;

export const HeaderContentContainer = tw.div`flex flex-row justify-between w-full items-center mr-4`;

export const FooterContentContainer = tw.div`flex flex-col items-center justify-center`;

export const FooterContent = styled.div`
  ${tw`flex items-center justify-center gap-2 text-center font-thin`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `2vw` : `0.8vw`};
`;

export const IconContainer = tw.div`flex gap-[1vw] mt-[1vh] cursor-pointer`;

export const LogoutText = tw.h5`text-center font-thin text-sm cursor-pointer hover:text-lg 
transition-all hover:font-light`;

export const LoginContainer = tw.div`flex flex-col h-[100vh] justify-center align-middle`;

export const LoginContent = tw.div`inline-flex flex-row justify-center align-middle mx-auto my-0
 gap-2 p-2 bg-black rounded-sm shadow-md hover:bg-[rgb(35,35,35)] cursor-pointer`;

export const LoginWithSpotify = tw.img`m-auto`;

export const LoginHeading = styled.div`
  ${tw`font-thin`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `6vw` : `2.5vw`};
  margin-bottom: ${(props: { isMobile: boolean }) => props.isMobile && `2vh`};
`;

export const LoginDescription = tw.p`text-sm font-thin`;

export const LoginText = tw.a`text-left font-normal text-sm mt-1`;

export const SidebarHeader = tw.div`flex flex-row h-[70px] w-full items-center gap-4 m-4`;

export const SidebarContent = tw.div`flex flex-col m-4 w-full`;

export const SidebarHeading = styled.div`
  ${tw`mb-[2vh] font-semibold`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `2.5vw` : `1.5vw`};
`;

export const ArtistListContainer = tw.div`w-[23vw] flex flex-row flex-wrap justify-between gap-4 h-[75vh] overflow-y-auto mr-8 pb-[15vh]`;

export const ArtistList = styled.div`
  ${tw`w-full flex gap-[2vw] items-center cursor-pointer hover:bg-[rgb(23,22,22)]`};
  width: ${(props: { isMobile: boolean }) => props.isMobile && `auto`};
`;

export const ArtistImage = tw.img`block rounded-lg`;

export const ArtistName = tw.span`font-thin text-[1.2vw]`;

export const ExplorifyLogo = tw.img`user-select[none]`;

export const MainContentContainer = tw.div`ml-[25vw]`;

export const MainContentHeading = styled.div`
  ${tw`h-[auto] p-[1vw] m-auto px-[4vw] ml-[25vw] font-extralight`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `4vw` : `2vw`};
`;

export const MainContentSideHeading = styled(MainContentHeading)`
  ${tw`m-0`};
  margin-top: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `2vh` : "8vh"};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `3vw` : `1.5vw`};
`;

export const FilterTag = styled.div`
  ${tw`ml-[4vw] inline-flex items-center gap-x-[1vw] p-[0.5vw] bg-black w-auto`};
  margin-top: ${(props: { isMobile: boolean }) => props.isMobile && `2vh`};
`;

export const FilterName = styled.div`
  ${tw`font-thin`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `3vw` : `1.2vw`};
`;

export const TrackContainer = tw.div`container mx-auto px-[2vw] mt-[1vh] mb-[15vh]`;

export const FlexRowWrap = tw.div`flex flex-wrap flex-row`;

export const TrackCard = styled.div`
  ${tw`w-1/3 my-4 px-4 cursor-default`};
  width: ${(props: { isMobile: boolean }) => props.isMobile && `100%`};
`;

export const TrackCardArticle = tw.article`overflow-hidden rounded-lg shadow-lg bg-[rgb(10,10,10)]`;

export const TrackImage = tw.img`block h-auto w-full`;

export const TrackHeader = tw.header`flex items-center justify-between p-[1vw] pb-0`;

export const TrackDetailContainer = styled.div`
  ${tw`w-[100%] flex justify-between gap-[1vw]`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `4vw` : `1.3vw`};
  margin-top: ${(props: { isMobile: boolean }) => props.isMobile && `1vh`};
`;

export const TrackName = tw.p`cursor-default w-[80%] no-underline hover:underline text-white 
whitespace-nowrap overflow-hidden overflow-ellipsis block`;

export const SpotifyImageContainer = tw.a``;

export const SpotifyImage = tw.img`cursor-pointer`;

export const TrackArtistFooter = tw.footer`flex items-center justify-between p-[1vw]`;

export const TrackArtistContainer = tw.div`flex items-center font-thin no-underline hover:underline text-white text-[0.8vw]`;

export const TrackArtistImage = tw.img`block rounded-full`;

export const TrackArtistName = styled.p`
  ${tw`ml-2 cursor-default`};
  font-size: ${(props: { isMobile: boolean }) =>
    props.isMobile ? `2.5vw` : `0.8vw`};
`;
