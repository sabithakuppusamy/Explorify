import React, { useEffect, useState } from "react";
import {
  FlexRowWrap,
  MainContentContainer,
  MainContentSideHeading,
  SpotifyImage,
  TrackContainer,
  NoDataContainer,
  Wrapper,
  SpotifyImageContainer,
} from "../../../styles";
import { fetchRecentlyPlayedTracks } from "../../../utils/api-helpers";
import Filter from "./Filter";
import SidebarNavigation from "./SidebarNavigation";
import SpinnerLoading from "./SpinnerLoading";
import TrackCardView from "./TrackCardView";

const HomePage = ({ token, isMobile }: any) => {
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [filteredTrackList, setFilterTrackList] = useState<any[]>([]);
  const [artistName, setArtistName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      getRecentlyPlayedTracks();
    }
  }, [artistName]);

  const getRecentlyPlayedTracks = async () => {
    setIsLoading(true);
    let songs: any[] = [];
    fetchRecentlyPlayedTracks(token)
      .then((data: any) => {
        data.items
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
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((_err: any) => {
        setIsLoading(false);
        alert(
          "Something Went wrong! Please check whether your admin provide you access dashboard!"
        );
      });
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

  const handleRemoveFilter = () => {
    window.sessionStorage.removeItem("artist");
    setArtistName("");
  };

  return (
    <>
      {isLoading && <SpinnerLoading />}
      <Wrapper isLoggedIn={!!token}>
        <SidebarNavigation
          recentPlayedTracks={playlist}
          token={token}
          handleArtistClick={filterByArtist}
          isMobile={isMobile}
        />
        <MainContentContainer>
          <MainContentSideHeading isMobile={isMobile}>
            Recently Played Tracks
          </MainContentSideHeading>
          {!!artistName && (
            <Filter
              handleRemove={handleRemoveFilter}
              artistName={artistName}
              isMobile={isMobile}
            />
          )}
          <TrackContainer>
            {filteredTrackList.length > 0 ? (
              <FlexRowWrap>
                {filteredTrackList.map((item: any, index: number) => {
                  return (
                    <TrackCardView
                      key={index}
                      trackDetails={item}
                      isMobile={isMobile}
                    />
                  );
                })}
              </FlexRowWrap>
            ) : (
              <NoDataContainer>
                <div className="font-thin text-[2vw] mb-[4vh]">
                  Oops! No track found
                </div>
                <div className="font-normal text-[1vw] text-center mb-[2vh]">
                  You should listen more songs to keep yourself calm!
                  <p>Listen it on spotify, now!</p>
                </div>
                <SpotifyImageContainer
                  href="https://open.spotify.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SpotifyImage
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="spotify"
                    width={"50vw"}
                    title="Listen it on spotify"
                  />
                </SpotifyImageContainer>
              </NoDataContainer>
            )}
          </TrackContainer>
        </MainContentContainer>
      </Wrapper>
    </>
  );
};

export default HomePage;
