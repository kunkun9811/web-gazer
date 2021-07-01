import React, { useState } from "react";
import Button from "../Button/Button";
// import { CustomButton } from "../Button2/Button2.Style";
import YoutubeEmbed from "../YoutubeEmbed";
import Reading from "../Reading/Reading";
import NavBar from "../NavBar";

// css
import "./Main.css";

export default function MainApp({ processSessionData }) {
  /* State Variables */
  const [selectedContent, updateSelectedContent] = useState("1");

  /* Functions */
  // onClick Handler
  const onClickHandler = (BtnId) => {
    updateSelectedContent(BtnId);
  };

  return (
    <div class="main-container">
      <NavBar selectedContent={selectedContent} onClickHandler={onClickHandler} />
      {selectedContent === "1" ? <YoutubeEmbed embedId="JUF5cJCCp-8" /> : selectedContent === "2" ? <YoutubeEmbed embedId="QVKj3LADCnA" /> : <Reading />}
      <Button label="Done!" BtnId="done" onClickHandler={processSessionData} selectedBtn={selectedContent} />
    </div>
  );
}
