import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Welcome, Navbar, Dock } from "#components";
import { Safari, Terminal } from "#windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <section>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
    </section>
  );
}

export default App;
