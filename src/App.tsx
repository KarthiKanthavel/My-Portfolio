
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
     <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App
