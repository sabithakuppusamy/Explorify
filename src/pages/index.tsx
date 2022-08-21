import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Layout from "./components/Layout";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

const Home: NextPage = () => {
  const [token, setToken] = useState<string | null>("");

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

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("artist");
  };

  return (
    <Layout token={token} handleLogout={handleLogout}>
      {!token ? <Login token={token} /> : <HomePage token={token} />}
    </Layout>
  );
};

export default Home;
