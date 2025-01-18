import React from "react";
import PropTypes from "prop-types"

export function HeroText({ title, text }) {
  return (
    <>
      <div className="hero-text-container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

HeroText.propTypes= { 
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}