import "./App.css";
import Circle from "./Components/Circle/Circle";
import Contact from "./Components/Contact/Contact";
import Dynamic from "./Components/Dynamic/Dynamic";
import Fitness from "./Components/Fitness/Fitness";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Plan from "./Components/Plan/Plan";
import Programs from "./Components/Programs/Programs";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Trainer from "./Components/Trainer/Trainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/about/About";
import NotFound from "./Components/notfound/NotFound";
import QA from "./Components/qa/QA";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/about"
            element={
              <>
                <About />
                <QA />
              </>
            }
          />
          <Route
            path="/programs"
            element={
              <>
                <Programs />
                <Dynamic />
                <Fitness />
              </>
            }
          />
          <Route path="/pricing" element={<Plan />} />
          <Route
            path="/trainers"
            element={
              <>
                <Trainer />
                <Circle />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
