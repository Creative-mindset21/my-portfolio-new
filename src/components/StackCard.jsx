import PropTypes from "prop-types";

const StackCard = ({ logo, title, desc }) => {
  return (
    <li className="card">
      <div>
        <div className="bg-grey-600 p-2">{logo}</div>
        <span>{title}</span>
      </div>

      <div>{desc}</div>
    </li>
  );
};

StackCard.propTypes = {
  logo: PropTypes.object,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default StackCard;
