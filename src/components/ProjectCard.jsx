import PropTypes from "prop-types";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const ProjectCard = ({ project }) => {
  const { img, title, category, stackUsed, linkTo, githubLink } = project;

  return (
    <li className="projectCard group flex flex-col gap-3">
      <figure>
        <img src={img} alt={title} title={title} className="rounded-t-lg" />
      </figure>

      <div className="px-4">
        <div>
          <small className="text-gray-300 tracking-wider">{category}</small>
          <p className="text-lg">{title}</p>
        </div>
      </div>

      <div className="px-4 pb-4 flex  justify-between items-center">
        <div className="flex gap-3 items-center">
          <a
            href={githubLink}
            target="_blank"
            className="flex gap-2 items-center bg-gray-light p-2.5 rounded-md duration-500 hover:shadow hover:shadow-[rgba(197,195,195,0.3)]"
          >
            <FaGithubSquare size={20} />
            <span className="text-sm">Github</span>
          </a>

          <a
            href={linkTo}
            target="_blank"
            className="flex gap-2 items-center bg-gray-light p-2.5 rounded-md duration-500 hover:shadow hover:shadow-[rgba(197,195,195,0.3)]"
          >
            <IoIosLink size={20} />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
        <div className="flex gap-3 items-center mt-3">{stackUsed}</div>
      </div>
    </li>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
