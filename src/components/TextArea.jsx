import React from "react";
import TopBar from "./topBar/TopBar";

const TextArea = ({ text, setText }) => {

  return( 
    <div className="editorWrap">
      <TopBar divName={"Editor"} />
      <textarea id="editor" type="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
    </div>
  )
}

export default TextArea;