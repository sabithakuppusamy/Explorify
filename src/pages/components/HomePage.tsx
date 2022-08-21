import React, { useEffect, useState } from "react";
import { Sidebar, Wrapper } from "../../../styles";
import {
  fetchRecentlyPlayedTracks,
  fetchSearchedArtist,
} from "../../../utils/api-helpers";
import SidebarNavigation from "./SidebarNavigation";

const HomePage = ({ token }: any) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState<any[]>([]);
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [filteredTrackList, setFilterTrackList] = useState<any[]>([]);
  const [artistName, setArtistName] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      getRecentlyPlayedTracks();
    }
  }, []);

  const getRecentlyPlayedTracks = async () => {
    const recentlyPlayedSongsList = await fetchRecentlyPlayedTracks(token);
    let songs: any[] = [];
    recentlyPlayedSongsList.items
      .filter((value: any, index: number, self: any) => {
        return (
          self.findIndex((v: any) => v.track.name === value.track.name) ===
          index
        );
      })
      .map((uniqueList: any) => {
        songs.push(uniqueList);
      });
    setPlaylist(songs);
    setFilterTrackList(songs);
  };

  const filterByArtist = (name: string) => {
    setArtistName(name);
    let filteredTracks: any[] = [];
    playlist.forEach((eachList: any) => {
      eachList.track.artists.forEach((eachListArtist: any) => {
        if (eachListArtist.name === name) {
          filteredTracks.push(eachList);
        }
      });
    });
    setFilterTrackList(filteredTracks);
  };

  return (
    <Wrapper isLoggedIn={!!token}>
      <Sidebar>
        <SidebarNavigation
          recentPlayedTracks={playlist}
          token={token}
          handleArtistClick={filterByArtist}
        />
      </Sidebar>

      <div className="ml-72">
        <h1 className="mx-auto px-12">Recently Played Tracks</h1>
        <p>Artist: {artistName}</p>
        <div className="container my-12 mx-auto px-12">
          <div className="flex flex-wrap flex-row">
            {filteredTrackList.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className=" w-1/3 my-4 px-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <article className="overflow-hidden rounded-lg shadow-lg bg-[rgb(14,14,14)]">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src={item.track.album.images[0].url}
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-white"
                          href="#"
                        >
                          {item.track.name}
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-white"
                        href="#"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          width={50}
                          height={50}
                          src={item.track.album.images[2].url}
                        />
                        <p className="ml-2 text-sm">
                          {item.track.artists.map((artist: any) => {
                            return <span key={artist.name}>{artist.name}</span>;
                          })}
                        </p>
                      </a>
                    </footer>
                  </article>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
