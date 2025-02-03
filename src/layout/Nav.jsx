import { FaFileDownload, FaUser } from "react-icons/fa";
import myImg from "../assets/my-img.jpg";
import { NavLink } from "react-router";
import { FaFolderClosed } from "react-icons/fa6";
import { TbMessageCircleHeart } from "react-icons/tb";

const Nav = () => {
  return (
    <nav className="navContainer">
      <div>
        <div className="navImg">
          <img
            src={myImg}
            alt="My image"
            className="w-10 h-10 md:w-35 md:h-35 object-top rounded-full"
          />
        </div>

        <p className="hidden md:block text-2xl tracking-wide">Isaac Awotoye</p>
        <p className="hidden md:block text-xl tracking-wider text-grey-text font-semibold">
          Frontend Developer
        </p>
      </div>

      <ul className="flex flex-col gap-7 mb-10 md:self-start md:pl-15 md:w-48">
        <li>
          <NavLink to="/" className="navlinks">
            <FaUser size={20} />
            <span className="hidden md:block">About Me</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="resume" className="navlinks">
            <FaFileDownload size={20} />
            <span className="hidden md:block">Resume</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="projects" className="navlinks">
            <FaFolderClosed size={20} />
            <span className="hidden md:block">Projects</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="contact" className="navlinks">
            <TbMessageCircleHeart size={20} />
            <span className="hidden md:block">Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
