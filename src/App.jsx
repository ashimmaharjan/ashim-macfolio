import { useState } from "react";
import "./App.css";
import { Welcome, Navbar } from "#components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Navbar />
      <Welcome />
    </section>
  );
}

export default App;
