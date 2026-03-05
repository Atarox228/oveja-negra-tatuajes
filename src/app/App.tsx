import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Values } from "./components/values";
import { ArtAndTattoo } from "./components/art-and-tattoo";
import { Clients } from "./components/clients";
import { Location } from "./components/location";
import { Footer } from "./components/footer";

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
