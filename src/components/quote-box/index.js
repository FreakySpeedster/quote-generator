import React, { Component } from 'react';

function QuoteBox() {
    const { useState } = React;
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const getQuotes = () => {
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then((data) =>data.json())
      .then((data)=> {
        let allQuotes = data.quotes;
        let randomQuote = allQuotes[Math.floor(Math.random()*allQuotes.length)];
        console.log(randomQuote);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
    }
    const handleClick = () => {
      getQuotes();
    }
    return (
      <div> 
        <div className="text-2xl font-bold underline"> {quote} </div>
        <div className="text-2xl font-bold"> - {author} </div>
        <button className="group w-200 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleClick}>Generate</button>
      </div>
    );
}

export default QuoteBox;