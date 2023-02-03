import "./App.css";
import { Channels } from "./Channels";
import CardHeader from "@mui/material/CardHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardHeader title="Catcher TV" />
        <Channels />
        <a
          className="App-link"
          href="https://rubenponce.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          created by Ruben
        </a>
      </header>
    </div>
  );
}

export default App;
