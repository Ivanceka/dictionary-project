import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="footer">
          <small>Coded by Ekaterina Ivanchenko</small>
        </footer>
      </div>
    </div>
  );
}
