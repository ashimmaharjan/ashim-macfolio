import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Welcome, Navbar, Dock } from "#components";
import { Resume, Safari, Terminal } from "#windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <section>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </section>
  );
}

export default App;
