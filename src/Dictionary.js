import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function Search(event) {
    event.preventDefault();
    // https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={Search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
          ></input>
        </form>
        <div className="example">i.e. sunset, wine, chocolate...</div>
      </section>
      <Results results={results} />
    </div>
  );
}
