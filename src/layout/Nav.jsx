import { FaFileDownload, FaUser } from "react-icons/fa";
import myImg from "../assets/my-img.jpg";
import { NavLink } from "react-router";
import { FaFolderClosed } from "react-icons/fa6";
import { TbMessageCircleHeart } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="navContainer">
      <div>
        <figure className="navImg">
          <img
            src={myImg}
            alt="My image"
            className="w-8 h-8 lg:w-35 lg:h-35 object-top rounded-full"
          />
        </figure>

        <p className="hidden lg:block text-2xl tracking-wide">Isaac Awotoye</p>
        <p className="hidden lg:block text-xl tracking-wider text-grey-text font-semibold">
          Frontend Developer
        </p>
      </div>

      <div className="hidden lg:block border-b-2 border-gray-light h-1 w-full"></div>

      <ul className="flex lg:flex-col items-center gap-7 lg:mb-10 lg:items-start lg:self-start lg:pl-15 lg:w-48">
        <li>
          <NavLink to="/" className="navlinks" title="About Me">
            <FaUser size={15} />
            <span className="hidden lg:block">About Me</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="resume" className="navlinks" title="Resume">
            <FaFileDownload size={15} />
            <span className="hidden lg:block">Resume</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="projects" className="navlinks" title="Projects">
            <FaFolderClosed size={15} />
            <span className="hidden lg:block">Projects</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="contact" className="navlinks" title="Contact">
            <TbMessageCircleHeart size={15} />
            <span className="hidden lg:block">Contact</span>
          </NavLink>
        </li>
      </ul>

      <div className="hidden lg:block border-b-2 border-gray-light h-1 w-full -mt-10"></div>

      <ul className="hidden lg:block lg:items-start lg:text-left gap-4">
        <li className="flex gap-3 items-center">
          <a
            href="mailto:tobiawotoye03@gmail.com"
            className="bg-gray-light p-2 rounded-lg shadow shadow-[rgba(197,195,195,0.3)]"
          >
            <IoMdMail size={25} />
          </a>
          <div>
            <small className="text-sm">Email</small>
            <p className="text-md">tobiawotoye03@gmail.com</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
