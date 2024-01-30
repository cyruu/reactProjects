import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import { useState, useEffect } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  function darkMode() {
    setTheme("dark");
  }
  function lightMode() {
    setTheme("light");
  }
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.toggle(theme);
  }, [theme]);
  return (
    <>
      <Navbar />
      <main>
        <ThemeProvider value={{ theme, darkMode, lightMode }}>
          <Card />
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
