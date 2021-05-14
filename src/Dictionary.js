import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyWordDefault);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function Search() {
    // https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handelPexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    let apiPexelKey = `563492ad6f91700001000001e79566cdba8246e8ad5a76e487748d0f`;
    let apiPexelUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    axios
      .get(apiPexelUrl, { headers: { Authorization: `Bearer ${apiPexelKey}` } })
      .then(handelPexelResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function load() {
    setLoaded(true);
    Search();
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder={keyword}
            ></input>
          </form>
          <div className="example">i.e. sunset, wine, chocolate...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
