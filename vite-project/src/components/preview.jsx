import React from "react";
import TopBar from "./topBar/TopBar";

const Preview = () => {
  return(
    <div className="previewWrap">
      <TopBar divName="Preview" />
      <div id="preview">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum</p>
      </div>
    </div>
  )
}

export default Preview;