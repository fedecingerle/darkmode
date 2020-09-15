import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./style.css";

function Button(props) {
  function handleClick() {
    props.changeTheme();
  }
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button className={`${theme} button`} onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default Button;
