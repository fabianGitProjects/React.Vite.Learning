import React from "react";
import { Button } from "./button.component.jsx";
import { HeroText } from "./HeroText.comp.jsx";
import PropTypes from "prop-types";
import "./Hero.style.css";





export default function Hero({ eventHandler, title, text }) {
  return (
    <>
      <section className="hero-section">
      
        <HeroText
        title={title} text = {text}
 
        />
      
       
        <div className="btn">
          <Button
            text={"Confirm"}
            style={"btn-success"}
            eventHandler={eventHandler}
          />
        </div>
      </section>
    </>
  );
}

Hero.propTypes = {
  eventHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}