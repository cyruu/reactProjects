import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  function handleDarkMode() {
    let bg = "rgb(30,30,30)";
    const circle = document.querySelector("#circle");
    const slideButton = document.querySelector(".button");
    slideButton.style.backgroundColor = "white";
    circle.style.left = "45px";
    circle.style.backgroundColor = bg;
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  function handleLightMode() {
    let bg = "rgb(30,30,30)";
    const circle = document.querySelector("#circle");
    circle.style.backgroundColor = "white";
    const slideButton = document.querySelector(".button");
    document.body.style.backgroundColor = "white";
    slideButton.style.backgroundColor = bg;
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    circle.style.left = "5px";
  }
  return (
    <>
      <Navbar />
      <main>
        <Card darkMode={handleDarkMode} lightMode={handleLightMode} />
      </main>
    </>
  );
}

export default App;
