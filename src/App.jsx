import "./App.css";
import { Api } from "./components/Api.comp.jsx";
import { Count } from "./components/count.comp.jsx";
import Hero from "./components/Hero.comp.jsx";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";






export default function App() {
  const onClickHandler = (event, text) => {
    event.target.style.backgroundColor = "red";
    alert(text);
  };

  return (
    <>
      <header>
        <Hero
          eventHandler={onClickHandler}
          title="Hello React!"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia rerum architecto tempore nisi enim commodi sunt quam dolores deserunt."
        />
      </header>

      <main>
        <Api/>
        <Count />
        <Count />
        <Count />
        <div className="bspdiv"><img className="bspbild" src={"bspbild.png"} alt="Bild konnte nicht geladen werden" width ={"300px"}/></div>
      </main>
    </>
  );
}


