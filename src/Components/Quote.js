import React, { useEffect, useState } from 'react';
import './css/Quote.css';

export default function Quote() {
  const [quote, setQuote] = useState({});
  useEffect(
    () => {
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => setQuote(data));
    }, [],
  );
  return (
    <div className="quote">
      <h1 className="text">Random Quote:</h1>
      <h2 className="text">
        &quot;
        {quote.content}
        &quot;
      </h2>
      <h3 className="text">
        By:
        {'  '}
        {quote.author}
      </h3>
    </div>
  );
}
