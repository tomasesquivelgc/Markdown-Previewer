import React from "react";
import TopBar from "./topBar/TopBar";

const TextArea = () => {
  return( 
    <div className="editorWrap">
      <TopBar divName={"Editor"} />
      <textarea id="editor" type="text"></textarea>
    </div>
  )
}

export default TextArea;