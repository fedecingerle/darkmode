import React, { useState } from "react";
import Button from "./components/Button";
import Content from "./components/Content/index";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  function handleClick() {
    const newTheme = theme == "ligth" ? "dark" : "ligth";
    setTheme(newTheme);
  }
  return (
    <ThemeProvider value={theme}>
      <Button changeTheme={handleClick} />
      <Content />
    </ThemeProvider>
  );
}

export default App;
