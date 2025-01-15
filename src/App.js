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
      </div>
    </div>
  );
}
