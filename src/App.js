import "./App.css";
import Circle from "./Components/Circle/Circle";
import Dynamic from "./Components/Dynamic/Dynamic";
import Fitness from "./Components/Fitness/Fitness";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Plan from "./Components/Plan/Plan";
import Programs from "./Components/Programs/Programs";
import Sidebar from "./Components/Sidebar/Sidebar";
import Trainer from "./Components/Trainer/Trainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Programs />
      <Dynamic />
      <Fitness />
      <Trainer />
      <Circle />
      <Plan />
      <Sidebar />
    </div>
  );
}

export default App;
