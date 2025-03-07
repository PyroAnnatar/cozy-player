import React from "react";

const Video = ({ src }) => {
  return (
    <iframe
      className="rounded-2xl"
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
};

export default Video;
