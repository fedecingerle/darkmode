import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./style.scss";

function Content() {
  const theme = useContext(ThemeContext);
  return (
    <div className="contentContainer">
      <div className={`${theme} content`}></div>
    </div>
  );
}

export default Content;
