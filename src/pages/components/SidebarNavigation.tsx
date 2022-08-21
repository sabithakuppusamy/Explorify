import React, { useEffect, useState } from "react";
import { SidebarHeader, HeaderTitle, ExplorifyLogo } from "../../../styles";
import { fetchArtistImage } from "../../../utils/api-helpers";

const SidebarNavigation = ({
  recentPlayedTracks,
  token,
  handleArtistClick,
}: any) => {
  const [topArtists, setTopArtists] = useState<any>([]);

  useEffect(() => {
    if (recentPlayedTracks) {
      getRecentlyPlayedTracksArtists();
    }
  }, [recentPlayedTracks]);

  const getRecentlyPlayedTracksArtists = () => {
    let artists: any[] = [];
    recentPlayedTracks.forEach((item: any) => {
      item.track.artists.forEach((artist: any) => {
        if (!artists.includes(artist.name)) {
          let artistObject = {
            image: getImage(artist.id),
            name: artist.name,
          };
          artists.push(artistObject);
        }
      });
    });
    setTopArtists(artists);
  };

  const getImage = (id: string) => {
    let data = fetchArtistImage(token, id);
    //console.log(data.images[0].url);
    return "https://i.scdn.co/image/ab6761610000e5eb53defb703e917e62b55ee8ed";
  };

  return (
    <div className="flex flex-col w-full">
      <SidebarHeader>
        <ExplorifyLogo
          width={70}
          height={70}
          alt="spotify icon"
          src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png"
        ></ExplorifyLogo>
        <HeaderTitle>Explorify</HeaderTitle>
      </SidebarHeader>
      <div className="flex flex-col m-4 w-full">
        <h1 className="mb-4">Your Top Artists</h1>
        <div className="w-[95%] flex flex-row flex-wrap justify-between gap-4 h-[60vh] overflow-y-auto">
          {topArtists.map((item: any, index: number) => {
            return (
              <div
                className="w-full flex gap-2 items-center cursor-pointer hover:bg-[rgb(23,22,22)]"
                key={index}
                onClick={() => {
                  handleArtistClick(item.name);
                }}
              >
                <img
                  alt="Placeholder"
                  className="block rounded-lg"
                  width={50}
                  height={50}
                  src={item.image}
                />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
