import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./layout/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
