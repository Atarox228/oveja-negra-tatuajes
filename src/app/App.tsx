import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Values } from "./components/sections/values";
import { ArtAndTattoo } from "./components/sections/art-and-tattoo";
import { Clients } from "./components/sections/clients";
import { Location } from "./components/sections/location";
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Values />
      <ArtAndTattoo />
      <Clients />
      <Location />
      <Footer />
    </div>
  );
}

export default App;