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

export const HeaderTitle = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 5vw;
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

export const FooterContent = tw.div`flex items-center justify-center gap-2 text-center font-thin text-[0.8vw]`;

export const IconContainer = tw.div`flex gap-[1vw] mt-[1vh] cursor-pointer`;

export const LogoutText = tw.h5`text-center font-thin text-sm cursor-pointer hover:text-lg 
transition-all hover:font-light`;

export const LoginContainer = tw.div`flex flex-col h-[100vh] justify-center align-middle`;

export const LoginContent = tw.div`inline-flex flex-row justify-center align-middle mx-auto my-0
 gap-2 p-2 bg-black rounded-sm shadow-md hover:bg-[rgb(35,35,35)] cursor-pointer`;

export const LoginWithSpotify = tw.img`m-auto`;

export const LoginHeading = tw.p`text-[5vw] font-thin`;

export const LoginDescription = tw.p`text-sm font-thin`;

export const LoginText = tw.a`text-left font-normal text-sm mt-1`;

export const SidebarHeader = tw.div`flex flex-row h-[70px] w-full items-center gap-4 m-4`;

export const SidebarContent = tw.div`flex flex-col m-4 w-full`;

export const SidebarHeading = tw.div`mb-4 font-semibold text-[1.5vw]`;

export const ArtistListContainer = tw.div`w-[23vw] flex flex-row flex-wrap justify-between gap-4 h-[60vh] overflow-y-auto mr-8`;

export const ArtistList = styled.div`
  ${tw`w-full flex gap-[2vw] items-center cursor-pointer hover:bg-[rgb(23,22,22)]`};
  width: ${(props: { isMobile: boolean }) => props.isMobile && `auto`};
`;

export const ArtistImage = tw.img`block rounded-lg`;

export const ArtistName = tw.span`font-thin text-[1.2vw]`;

export const ExplorifyLogo = tw.img`user-select[none]`;

export const MainContentContainer = tw.div`ml-[25vw]`;

export const MainContentHeading = tw.div`h-[auto] p-[1vw] m-auto px-[4vw] text-[1.9vw] ml-[25vw] font-extralight`;

export const MainContentSideHeading = styled(MainContentHeading)`
  ${tw`m-0 text-[1.5vw]`};
  margin-top: ${(props: { isMobile: boolean }) => !props.isMobile && `4vh`};
`;

export const FilterTag = tw.div`ml-[4vw] inline-flex items-center gap-x-[1vw] p-[0.5vw] bg-black w-auto`;

export const FilterName = tw.p`font-thin text-[1.2vw]`;

export const TrackContainer = tw.div`container mx-auto px-[2vw] mt-[1vh] mb-[15vh]`;

export const FlexRowWrap = tw.div`flex flex-wrap flex-row`;

export const TrackCard = styled.div`
  ${tw`w-1/3 my-4 px-4 cursor-default`};
  width: ${(props: { isMobile: boolean }) => props.isMobile && `100%`};
`;

export const TrackCardArticle = tw.article`overflow-hidden rounded-lg shadow-lg bg-[rgb(10,10,10)]`;

export const TrackImage = tw.img`block h-auto w-full`;

export const TrackHeader = tw.header`flex items-center justify-between p-[1vw] pb-0`;

export const TrackDetailContainer = tw.div`text-[1.3vw] w-[100%] flex justify-between gap-[1vw]`;

export const TrackName = tw.p`cursor-default w-[80%] no-underline hover:underline text-white 
whitespace-nowrap overflow-hidden overflow-ellipsis block`;

export const SpotifyImageContainer = tw.a``;

export const SpotifyImage = tw.img`cursor-pointer`;

export const TrackArtistFooter = tw.footer`flex items-center justify-between p-[1vw]`;

export const TrackArtistContainer = tw.div`flex items-center font-thin no-underline hover:underline text-white text-[0.8vw]`;

export const TrackArtistImage = tw.img`block rounded-full`;

export const TrackArtistName = tw.p`ml-2 text-[0.8vw] cursor-default`;
