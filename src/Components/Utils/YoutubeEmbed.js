import React from "react";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="youtube-video">
      <iframe
        // width="853"
        // height="480"
        width="1200"
        height="800"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
