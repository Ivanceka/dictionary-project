import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary keyWordDefault="sunset" />
        <footer className="footer">
          <small>Coded by Ekaterina Ivanchenko and it is </small>
          <a
            href="https://github.com/Ivanceka/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            <small>open-source,</small>
          </a>
          <small> photo from </small>
          <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
            <small>Pexel.</small>
          </a>
        </footer>
      </div>
    </div>
  );
}
