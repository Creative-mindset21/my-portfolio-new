import { NavLink } from "react-router";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const Project = ({ filteredItems, handleFilterChange, filter }) => {
  return (
    <section className="bg-grey-600 lg:rounded-lg lg:p-6 p-4 pt-25 pb-20">
      <div className="flex items-center justify-between gap-4">
        <h1>Projects</h1>

        <div className="flex gap-10">
          {/* ! ===== MOBILE PHONES ===== */}
          <label htmlFor="mobileProjectSelect"></label>
          <select
            value={filter}
            onChange={handleFilterChange}
            id="mobileProjectSelect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">All</option>
            <option value="Web Application">Web Applications</option>
            <option value="Utility Application">Utility Application</option>
            <option value="UI Design">UI Design</option>
          </select>

          {/* ! ===== TABLETS AND LAPTOPS ===== */}
          <label htmlFor="tabletProjectSelect"></label>
          <nav id="tabletProjectSelect" className="hidden md:flex gap-4">
            <button
              onClick={handleFilterChange}
              value="all"
              className={`${
                "all" === filter ? "text-cyan-500" : "text-white"
              } duration-500 hover:-translate-y-0.5`}
            >
              All
            </button>

            <button
              onClick={handleFilterChange}
              value="Web Application"
              className={`${
                "Web Application" === filter ? "text-cyan-500" : "text-white"
              } duration-500 hover:-translate-y-0.5`}
            >
              Web Application
            </button>

            <button
              onClick={handleFilterChange}
              value="Utility Application"
              className={`${
                "Utility Application" === filter
                  ? "text-cyan-500"
                  : "text-white"
              } duration-500 hover:-translate-y-0.5`}
            >
              Utility Application
            </button>

            <button
              onClick={handleFilterChange}
              value="UI Design"
              className={`${
                "UI Design" === filter ? "text-cyan-500" : "text-white"
              } duration-500 hover:-translate-y-0.5`}
            >
              UI Design
            </button>
          </nav>

          <NavLink
            to="../contact"
            className="hidden md:flex py-2 px-4 rounded-lg duration-300 bg-gray-light shadow shadow-[rgba(197,195,195,0.3)]"
          >
            Hire Me
          </NavLink>
        </div>
      </div>

      <ul className="projects">
        {filteredItems.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};

Project.propTypes = {
  filteredItems: PropTypes.array,
  handleFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Project;
