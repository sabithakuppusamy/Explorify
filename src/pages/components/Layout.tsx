import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = (props: any) => {
  const router = useRouter();

  return (
    <div className="layout">
      <Head>
        <title>Explorify</title>
        <link
          rel="icon"
          href="https://img.icons8.com/color/344/spotify--v3.png"
        />
      </Head>
      <div className="flex flex-col">
        <div className="flex header fixed z-10 top-0 w-full">
          <img
            width={70}
            height={70}
            className="p-4"
            src="https://img.icons8.com/color/344/spotify--v3.png"
          ></img>
          <div className="flex flex-row justify-between w-full items-center mr-4">
            <h2 className="text-center font-thin text-3xl text-white">
              Explorify
            </h2>
            {router.pathname !== "/" && (
              <h5
                className="text-center font-thin text-sm text-white cursor-pointer hover:text-lg transition-all hover:font-light"
                onClick={() => {
                  router.push("/");
                }}
              >
                Change User
              </h5>
            )}
          </div>
        </div>
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
