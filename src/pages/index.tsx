import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Layout from "./components/Layout";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

const Home: NextPage = () => {
  const [token, setToken] = useState<string | null>("");
  const [isMobile, setIsMobile] = useState(false);

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 650);
  };

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("artist");
  };

  return (
    <Layout token={token} handleLogout={handleLogout} isMobile={isMobile}>
      {!token ? (
        <Login token={token} isMobile={isMobile} />
      ) : (
        <HomePage
          token={token}
          isMobile={isMobile}
          handleLogout={handleLogout}
        />
      )}
    </Layout>
  );
};

export default Home;
