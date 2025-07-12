import {
  FaFileDownload,
  FaGithubSquare,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import myImg from "../assets/my-img.jpg";
import { NavLink } from "react-router";
import { FaFolderClosed } from "react-icons/fa6";
import { TbMessageCircleHeart } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import curriculumVitae from "../assets/My Curriculum Vitae.pdf";

const Nav = () => {
  return (
    <header>
      <nav className="navContainer">
        <div className="flex lg:flex-col items-center gap-4">
          <a className="navImg" href="/">
            <img
              src={myImg}
              alt="My image"
              className="w-8 h-8 lg:w-35 lg:h-35 object-top rounded-full"
            />
          </a>

          <div>
            <p className=" text-sm  md:text-2xl tracking-wide">Isaac Awotoye</p>
            <p className="hidden lg:block text-xl tracking-wider text-grey-text font-semibold">
              Frontend Developer
            </p>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <a href="https://github.com/Creative-mindset21" target="_blank">
            <FaGithubSquare
              size={25}
              className="duration-300 hover:-translate-y-0.5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-awotoye-56a5ab255/"
            target="_blank"
          >
            <FaLinkedin
              size={25}
              className="fill-blue-500 duration-300 hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="hidden lg:block border-b-2 border-gray-light h-1 w-full"></div>

        <ul className="hidden lg:flex lg:flex-col items-center gap-7 lg:mb-7 lg:items-start lg:self-start lg:pl-15 lg:w-48">
          <li>
            <NavLink to="/" className="navlinks" title="About Me">
              <FaUser size={15} />
              <span className="hidden lg:block">About Me</span>
            </NavLink>
          </li>

          <li>
            <a
              href={curriculumVitae}
              target="_blank"
              className="navlinks"
              title="Resume"
            >
              <FaFileDownload size={15} />
              <span className="hidden lg:block">Resume</span>
            </a>
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

        <ul className="hidden lg:flex flex-col lg:items-start lg:text-left gap-5">
          <li className="flex gap-3 items-center">
            <a
              href="mailto:isaacawotoye019@gmail.com"
              className="bg-gray-light p-2 rounded-lg shadow shadow-[rgba(197,195,195,0.3)]"
            >
              <IoMdMail size={25} />
            </a>
            <div>
              <small className="text-sm">Email</small>
              <p className="text-md">isaacawotoye019@gmail.com</p>
            </div>
          </li>

          <li className="flex gap-3 items-center">
            <a
              href="https://github.com/Creative-mindset21"
              target="_blank"
              className="bg-gray-light p-2 rounded-lg shadow shadow-[rgba(197,195,195,0.3)]"
            >
              <FaGithubSquare size={25} />
            </a>
            <div>
              <small className="text-sm">Github</small>
              <p className="text-md">Creative Mindset</p>
            </div>
          </li>
        </ul>
      </nav>

      <ul className="lg:hidden fixed bottom-0 left-0 right-0 flex items-center justify-center gap-6 md:gap-15 bg-gray-light py-4 rounded-t-2xl z-10">
        <li>
          <NavLink to="/" className="navlinks" title="About Me">
            <FaUser size={15} className="hidden" />
            <span className="text-sm">About Me</span>
          </NavLink>
        </li>

        <li>
          <a
            href={curriculumVitae}
            target="_blank"
            className="navlinks"
            title="Resume"
          >
            <FaFileDownload size={15} className="hidden" />
            <span className="text-sm">Resume</span>
          </a>
        </li>

        <li>
          <NavLink to="projects" className="navlinks" title="Projects">
            <FaFolderClosed size={15} className="hidden" />
            <span className="text-sm">Projects</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="contact" className="navlinks" title="Contact">
            <TbMessageCircleHeart size={15} className="hidden" />
            <span className="text-sm">Contact</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
