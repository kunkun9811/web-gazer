import React, { useState } from "react";
import Button from "../Button/Button";
// import { CustomButton } from "../Button2/Button2.Style";
import YoutubeEmbed from "../YoutubeEmbed";
import Reading from "../Reading/Reading";
import NavBar from "../NavBar";

// css
import "./Main.css";

/* Bootstrap 5 breakpoints = (xs, sm, md, lg, and xl)*/
export default function MainApp({ sendDataToBackEnd }) {
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
      {/* <div className="title-container">
        <h1>Hello!</h1>
        <p>Select the task you would like to do</p>
      </div> */}
      {/* <div className="buttons">
        <Button label="Chill YouTube Video" BtnId="1" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
        <Button label="Academic Video" BtnId="2" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
        <Button label="Reading" BtnId="3" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
      </div> */}

      {selectedContent === "1" ? <YoutubeEmbed embedId="JUF5cJCCp-8" /> : selectedContent === "2" ? <YoutubeEmbed embedId="QVKj3LADCnA" /> : <Reading />}
      <Button label="Done!" BtnId="4" onClickHandler={sendDataToBackEnd} selectedBtn="5" />
    </div>
  );
}
