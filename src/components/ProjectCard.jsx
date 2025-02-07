import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const { img, title, category, stackUsed, linkTo } = project;

  return (
    <section className="projectCard group">
      <a href={linkTo} target="_blank" className="flex flex-col gap-3">
        <figure>
          <img src={img} alt={title} title={title} className="rounded-t-lg" />
        </figure>

        <div className="px-4 pb-4 flex justify-between items-center gap-4">
          <div>
            <small className="text-gray-300 tracking-wider">{category}</small>
            <p className="text-lg">{title}</p>
          </div>

          <div className="flex gap-3 items-center mt-3">{stackUsed}</div>
        </div>
      </a>
    </section>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
