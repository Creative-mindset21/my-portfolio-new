import { projectsData } from "../data/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="bg-grey-600 lg:rounded-lg p-4">
      <div className="flex items-center justify-between gap-4">
        <h1>Projects</h1>

        <div>
          {/* ! ===== MOBILE PHONES ===== */}
          <label htmlFor="projectSelect"></label>
          <select
            name=""
            id="projectSelect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">All</option>
            <option value="web-applications">Web Applications</option>
            <option value="tools">Tools</option>
            <option value="ui-design">UI Design</option>
          </select>
        </div>
      </div>

      <div className="projects">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
