import React from "react";
import {
  TrackCard,
  TrackCardArticle,
  TrackImage,
  TrackHeader,
  TrackDetailContainer,
  TrackName,
  SpotifyImageContainer,
  SpotifyImage,
  TrackArtistFooter,
  TrackArtistContainer,
  TrackArtistImage,
  TrackArtistName,
} from "../../../styles";

const TrackCardView = (props: any) => {
  const { trackDetails, isMobile } = props;
  return (
    <TrackCard isMobile={isMobile} title={trackDetails?.track?.name}>
      <TrackCardArticle>
        <TrackImage
          alt={trackDetails?.track?.name}
          src={trackDetails?.track?.album.images[0].url}
        />
        <TrackHeader isMobile={isMobile}>
          <TrackDetailContainer isMobile={isMobile}>
            <TrackName title={trackDetails?.track?.name}>
              {trackDetails?.track?.name}
            </TrackName>
            <SpotifyImageContainer
              href="https://open.spotify.com/"
              rel="noreferrer"
              target="_blank"
            >
              <SpotifyImage
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="spotify"
                width={"30vw"}
                title="Listen it on spotify"
              />
            </SpotifyImageContainer>
          </TrackDetailContainer>
        </TrackHeader>
        <TrackArtistFooter isMobile={isMobile}>
          <TrackArtistContainer>
            <TrackArtistImage
              alt="Placeholder"
              width={"50vw"}
              src={trackDetails?.track?.album.images[2].url}
            />
            <TrackArtistName isMobile={isMobile}>
              {trackDetails?.track?.artists.map((artist: any, idx: number) => {
                return (
                  <span key={idx}>
                    {artist.name}
                    {idx + 1 !== trackDetails?.track?.artists.length
                      ? ", "
                      : ""}
                  </span>
                );
              })}
            </TrackArtistName>
          </TrackArtistContainer>
        </TrackArtistFooter>
      </TrackCardArticle>
    </TrackCard>
  );
};

export default TrackCardView;
