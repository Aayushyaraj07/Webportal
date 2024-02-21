import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const { content, author } = data;
      const twitterShareURL = `https://twitter.com/intent/tweet?text="${content}" - ${author}`;

      setQuoteText(`"${content}" - ${author}`);
      setAuthor(twitterShareURL);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[1000px] h-[600px] text-black font-semibold mb-8">
      <div className="w-3/4 h-[60%] p-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl">
        <h1 className="text-2xl text-center text-black font-bold my-5">Quote of the Day</h1>
        <p className="italic" id="quote-text">{quoteText}</p>
        <div className="mt-10 flex gap-5">
          {/* <button
            className=" bg-blue-200 p-2 rounded shadow-md font-medium"
            // onClick={getQuote}
          >
            New Quote
          </button> */}
          <a
            href={author}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 mx-auto p-4 rounded shadow-md"
          >
            Share on Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quote;