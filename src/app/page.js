"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import Video from "./components/Video";

const Home = () => {
  const [selected, setSelected] = useState(
    "https://www.youtube.com/embed/mWonAu_4-R0?si=9reJeb5SNey42jlD"
  );

  function handleChange(e) {
    setSelected(e.target.value);
  }
  return (
    <div className="grid place-items-center">
      <Menu selected={selected} handleChange={handleChange} />
      <Video src={selected} />
    </div>
  );
};

export default Home;
