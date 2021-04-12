import React,  { useState } from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

function App() {
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((data) => setQuote(data[0]));
  };
  const [quote, setQuote] = useState(getQuote);
  return (
    <div className="App">
      <h1> Simpson's App</h1>
      <QuoteCard {...quote} getQuote={getQuote} />
    </div>
  );
}

export default App;
