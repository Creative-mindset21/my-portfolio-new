import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./layout/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useState } from "react";
import { projectsData } from "./data/data";
import Welcome from "./components/Welcome";

function App() {
  const [filter, setFilter] = useState("all");

  // ! ===== HANDLE FILTER CHANGE
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // ! ===== FILTERED ARRAY
  const filteredItems =
    filter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === filter);

  return (
    <BrowserRouter>
      {/* <Welcome /> */}
      <div className="wrapper">
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="projects"
            element={
              <Project
                handleFilterChange={handleFilterChange}
                filteredItems={filteredItems}
                filter={filter}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
