import './App.css';
import React, { useState } from 'react'

function App() {
  const arrayOfQuotes = [
    "“The greatest of richness is the richness of the soul.” Prophet Muhammad (peace be upon him).",
    "“The greatest jihad is to battle your own soul, to fight the evil within yourself.” Prophet Muhammad (peace be upon him).",
    "“The strongest among you is the one who controls his anger.” Prophet Muhammad (peace be upon him).",
    "“God does not look at your forms and possessions but he looks at your hearts and your deeds.” Prophet Muhammad (peace be upon him).",
    "“The best among you is the one who doesn’t harm others with his tongue and hands.” Prophet Muhammad (peace be upon him).",
    "“A good man treats women with honour.” Prophet Muhammad (peace be upon him).",
    "“There is reward for kindness to every living thing.” Prophet Muhammad (peace be upon him).",
    "Everything you can imagine is real. – Pablo Picasso",
    "Whatever you do, do it well. – Walt Disney",
    "All limitations are self-imposed. – Oliver Wendell Holmes",
    "What we think, we become. – Buddha"
  ];
  const [RandomQuote, setRandomQuote] = useState(arrayOfQuotes[5]);/*Default quote  */
  console.log(RandomQuote);
  // this function will generate a random quote and set it to usState (setRandomQuote)
  function generateRandomQuote() {
    setRandomQuote(arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)]);
  }
  return (
    <div className="App">
      <p className="title">Random Quote Generator</p>
      <div className="generteRandomQuote">
        <p className="quote">{RandomQuote}</p>
        <button onClick={generateRandomQuote}>Generate</button>
      </div>
    </div>
  );
}

export default App;
