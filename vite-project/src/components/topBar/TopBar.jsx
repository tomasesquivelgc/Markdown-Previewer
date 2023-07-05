import React from "react";

const TopBar = ({divName}) => {
  return(
    <div className="toolbar">
      <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
      {divName}
      <i className="fa fa-arrows-alt"></i>
    </div>
  )
}

export default TopBar;