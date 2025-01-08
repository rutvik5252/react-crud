import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Service from "./Component/Service";
import Blog from "./Component/Blog";
import Home from "./Component/Home";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
