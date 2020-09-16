import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./style.scss";

function Button(props) {
  function handleClick() {
    props.changeTheme();
  }
  const theme = useContext(ThemeContext);

  return (
    <div className="buttonContainer">
      <button className={`${theme} button`} onClick={handleClick}>
        CAMBIAR COLOR
      </button>
    </div>
  );
}

export default Button;
