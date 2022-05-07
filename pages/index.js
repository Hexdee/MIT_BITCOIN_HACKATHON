import React, { useEffect } from "react";
import Card1 from "../components/Card1";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Starter from "../components/Starter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative screen-w max-w-screen-2xl px-6 laptop:px-24 m-auto">
        <Starter />
        <Cards />
        <Card1/>

      </div>
    </>
  );
}
