import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defenicion`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <h2>What word do you want to look up?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Type here"
        ></input>
      </form>
    </div>
  );
}
