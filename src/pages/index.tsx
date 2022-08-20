import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE,
} from "../../constant/const";
import {
  fetchRecentlyPlayedTracks,
  fetchSearchedArtist,
} from "../../utils/api-helpers";
import Layout from "./components/Layout";

const Home: NextPage = () => {
  const [token, setToken] = useState<string | null>("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const LOGIN_LINK = `${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;

  useEffect(() => {
    const hash = window.location.hash;
    let storageToken = window.localStorage.getItem("token");

    if (!storageToken && hash) {
      storageToken =
        hash
          ?.substring(1)
          ?.split("&")
          ?.find((elem: string): boolean => elem.startsWith("access_token"))
          ?.split("=")[1] ?? "";

      window.location.hash = "";
      window.localStorage.setItem("token", storageToken);
    }

    setToken(storageToken);
  }, [token]);

  useEffect(() => {
    if (token) {
      getRecentlyPlayedTracks();
    }
  }, [token]);

  const getRecentlyPlayedTracks = async () => {
    const recentlyPlayedSongsList = await fetchRecentlyPlayedTracks(token);
    setPlaylist(recentlyPlayedSongsList.items);
  };

  const searchArtists = async (e: any) => {
    e.preventDefault();
    const artistResult = await fetchSearchedArtist(token, searchKey);
    setArtists(artistResult.artists.items);
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const renderArtists = () => {
    return artists.map((artist: any) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <h1>Spotify</h1>
          {!token ? (
            <a href={LOGIN_LINK}>Login to Spotify</a>
          ) : (
            <>
              <form onSubmit={searchArtists}>
                <input
                  type="text"
                  onChange={(e) => setSearchKey(e.target.value)}
                />
                <button type={"submit"}>Search</button>
              </form>
              {renderArtists()}
              <button onClick={logout}>Logout</button>
            </>
          )}
        </header>
      </div>
    </Layout>
  );
};

export default Home;
