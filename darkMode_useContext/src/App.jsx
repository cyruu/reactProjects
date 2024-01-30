import "./App.css";
import { useState, useEffect } from "react";
import Range from "./components/Range";
import Card from "./components/Card";
import { RangeProvider } from "./contexts/RangeContext";
function App() {
  const [theme, setTheme] = useState("light");
  function darkMode() {
    setTheme("dark");
  }
  function lightMode() {
    setTheme("light");
  }
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.toggle(theme);
  }, [theme]);
  return (
    <div className="text-center">
      <p className="text-3xl mb-5">Even for (Light Mode)</p>
      <p className="text-3xl">Odd for (Dark Mode)</p>
      <RangeProvider value={{ theme, darkMode, lightMode }}>
        <Range />
        <Card />
      </RangeProvider>
    </div>
  );
}

export default App;
