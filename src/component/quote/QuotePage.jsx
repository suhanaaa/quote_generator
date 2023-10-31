import React, { useState, useEffect } from "react";

const QuotePage = () => {
  const [quoteData, setQuoteData] = useState({
    text: "",
    author: { name: "" },
  });

  const search = async () => {
    try {
      let url = `https://api.fisenko.net/v1/quotes/en/random`;
      let response = await fetch(url);
      let data = await response.json();

      if (!response.ok) {
        throw new Error("There is some issue with the API");
      }

      setQuoteData(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className=" flex flex-col mt-20 mx-10 px-6 pb-20 rounded-xl items-center space-y-6 bg-gradient-to-r from-purple-600 to-blue-600 md:mx-auto   md:max-w-lg ">
      <h1 className="pt-10 font-semibold text-4xl text-white">Quote</h1>

      <div className="flex flex-col text-white italic">
        " {quoteData.text} "
      </div>
      <div className="text-white">Author: {quoteData.author.name}</div>
      <button
        className="px-7 py-3 bg-white rounded-xl text-blue-600 hover:shadow-xl "
        onClick={() => {
          search();
        }}
      >
        change
      </button>
    </div>
  );
};

export default QuotePage;
