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
            className="w-8 h-8 md:w-35 md:h-35 object-top rounded-full"
          />
        </div>

        <p className="hidden md:block text-2xl tracking-wide">Isaac Awotoye</p>
        <p className="hidden md:block text-xl tracking-wider text-grey-text font-semibold">
          Frontend Developer
        </p>
      </div>

      <ul className="flex md:flex-col items-center gap-7 md:mb-10 md:items-start md:self-start md:pl-15 md:w-48">
        <li>
          <NavLink to="/" className="navlinks" title="About Me">
            <FaUser size={15} />
            <span className="hidden md:block">About Me</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="resume" className="navlinks" title="Resume">
            <FaFileDownload size={15} />
            <span className="hidden md:block">Resume</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="projects" className="navlinks" title="Projects">
            <FaFolderClosed size={15} />
            <span className="hidden md:block">Projects</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="contact" className="navlinks" title="Contact">
            <TbMessageCircleHeart size={15} />
            <span className="hidden md:block">Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
