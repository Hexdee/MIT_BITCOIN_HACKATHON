import Head from "next/head";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Starter from "../components/Starter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative screen-w max-w-screen-2xl px-6 laptop:px-24 m-auto">
        <Starter />
  
      </div>
    </>
  );
}
