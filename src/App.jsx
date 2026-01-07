import { useState } from "react";
import "./App.css";
import { Welcome, Navbar } from "#components";
import Dock from "#components/Dock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Navbar />
      <Welcome />
      <Dock />
    </section>
  );
}

export default App;
