import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">English Dictionary</header>
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/PopovMaja"
            target="_blank"
            rel="noreferrer"
          >
            Maja Popov
          </a>{" "}
          and is on{" "}
          <a
            href="https://github.com/PopovMaja/project-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://english-words-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
