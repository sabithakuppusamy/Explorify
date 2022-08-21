import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Sidebar, Wrapper } from "../../../styles";
import { fetchRecentlyPlayedTracks } from "../../../utils/api-helpers";
import SidebarNavigation from "./SidebarNavigation";

const HomePage = ({ token }: any) => {
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [filteredTrackList, setFilterTrackList] = useState<any[]>([]);
  const [artistName, setArtistName] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      getRecentlyPlayedTracks();
    }
  }, [artistName]);

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

    if (window.sessionStorage.getItem("artist")) {
      let artist = window.sessionStorage.getItem("artist") || "";
      filterByArtist(artist);
    } else {
      setFilterTrackList(songs);
    }
  };

  const filterByArtist = (name: string) => {
    setArtistName(name);
    window.sessionStorage.setItem("artist", name);
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
        <h1 className="mx-auto px-12 text-2xl ml-4 font-extralight">
          Recently Played Tracks
        </h1>
        {!!artistName && (
          <div className="ml-16 mt-4 inline-flex items-center gap-4 p-2 bg-black w-auto">
            <p className="font-thin">{artistName}</p>
            <FontAwesomeIcon
              onClick={() => {
                window.sessionStorage.removeItem("artist");
                setArtistName("");
              }}
              icon={faClose}
              className="text-white w-2 cursor-pointer mt-1"
            ></FontAwesomeIcon>
          </div>
        )}
        <div className="container my-12 mx-auto px-12 mb-20">
          <div className="flex flex-wrap flex-row">
            {filteredTrackList.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className=" w-1/3 my-4 px-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-default"
                  title={item.track.name}
                >
                  <article className="overflow-hidden rounded-lg shadow-lg bg-[rgb(14,14,14)]">
                    <div>
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src={item.track.album.images[0].url}
                      />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg w-[95%] flex justify-between gap-2">
                        <p
                          className=" cursor-default no-underline hover:underline text-white whitespace-nowrap overflow-hidden text-ellipsis block"
                          title={item.track.name}
                        >
                          {item.track.name}
                        </p>
                        <a
                          href="https://open.spotify.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <img
                            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                            alt="spotify"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                            title="Listen it on spotify"
                          />
                        </a>
                      </h1>
                    </header>

                    <footer className="flex items-center justify-between p-2 md:p-4">
                      <p className="flex items-center no-underline hover:underline text-white">
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          width={50}
                          height={50}
                          src={item.track.album.images[2].url}
                        />
                        <p className="ml-2 text-sm cursor-default">
                          {item.track.artists.map(
                            (artist: any, index: number) => {
                              return (
                                <span key={index}>
                                  {artist.name}
                                  {index + 1 !== item.track.artists.length
                                    ? ", "
                                    : ""}
                                </span>
                              );
                            }
                          )}
                        </p>
                      </p>
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
