import React, { useEffect, useState } from "react";
import {
  SidebarHeader,
  HeaderTitle,
  ExplorifyLogo,
  Sidebar,
  ArtistListContainer,
  SidebarContent,
  SidebarHeading,
  ArtistList,
  ArtistImage,
  ArtistName,
} from "../../../styles";
import { fetchArtistImage } from "../../../utils/api-helpers";

const SidebarNavigation = ({
  recentPlayedTracks,
  token,
  handleArtistClick,
  isMobile,
}: any) => {
  const [topArtists, setTopArtists] = useState<any>([]);

  useEffect(() => {
    if (recentPlayedTracks) {
      getRecentlyPlayedTracksArtists();
    }
  }, [recentPlayedTracks]);

  const getRecentlyPlayedTracksArtists = () => {
    recentPlayedTracks.forEach((item: any) => {
      item.track.artists.forEach((artist: any) => {
        getImage(artist.id, artist.name);
      });
    });
  };

  const getImage = (id: string, name: string) => {
    fetchArtistImage(token, id).then((data: any) => {
      let artistObject = {
        name: name,
        image: data.images[0].url,
      };
      setTopArtists((oldData: any) => {
        let artistList = [...oldData, artistObject];
        return artistList.filter(
          (v, i, a) =>
            a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
        );
      });
    });
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <ExplorifyLogo
          width={"60vw"}
          height={"60vw"}
          alt="spotify icon"
          src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png"
        ></ExplorifyLogo>
        {!isMobile && <HeaderTitle>Explorify</HeaderTitle>}
      </SidebarHeader>
      <SidebarContent>
        <SidebarHeading isMobile={isMobile}>Your Top Artists</SidebarHeading>
        <ArtistListContainer>
          {topArtists.map((item: any, index: number) => {
            return (
              <ArtistList
                isMobile={isMobile}
                key={index}
                onClick={() => {
                  handleArtistClick(item.name);
                }}
              >
                <ArtistImage
                  alt="Placeholder"
                  width={50}
                  height={50}
                  src={item.image}
                />
                {!isMobile && <ArtistName>{item.name}</ArtistName>}
              </ArtistList>
            );
          })}
        </ArtistListContainer>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarNavigation;
