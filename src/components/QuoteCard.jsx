import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, character, image, getQuote }) => (
  <div className="Container">
    <button id='btn' onClick={getQuote}>Call me a character with a quote</button>
    <h2>{character}</h2>
    <div className="QuoteCard"></div>
      <img src={image} alt={character} />
        <p>{quote}</p>
  </div>
);

export default QuoteCard;