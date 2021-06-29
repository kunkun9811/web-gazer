import React, { useState } from "react";
import Button from "../Button/Button";
import { CustomButton } from "../Button2/Button2.Style";
import YoutubeEmbed from "../Utils/YoutubeEmbed";

// css
import "./Main.css";

/* Bootstrap 5 breakpoints = (xs, sm, md, lg, and xl)*/
export default function MainApp() {
  /* State Variables */
  const [selectedContent, updateSelectedContent] = useState("1");

  /* Functions */
  // onClick Handler
  const onClickHandler = (BtnId) => {
    updateSelectedContent(BtnId);
  };

  return (
    <div class="d-flex flex-column justify-content-center align-items-center main-container">
      <div className="title-container">
        <h1>Hello!</h1>
        <p>Aankh Eye Tracking Test</p>
      </div>
      <div className="buttons">
        <Button label="Chill YouTube Video" BtnId="1" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
        <Button label="Academic Video" BtnId="2" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
        <Button label="Reading" BtnId="3" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
        <CustomButton selected={selectedContent} />
      </div>

      {selectedContent === "1" ? <YoutubeEmbed embedId="JUF5cJCCp-8" /> : selectedContent === "2" ? <YoutubeEmbed embedId="QVKj3LADCnA" /> : <div>Reading</div>}
    </div>
  );
}
