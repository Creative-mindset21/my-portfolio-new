import { FaCss3Alt, FaGithubSquare, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

// ! ===== IMPORT WEBSITE IMAGES =====
import website1 from "../assets/website-1.png";
import website2 from "../assets/website-2.png";
import website3 from "../assets/website-3.png";
import website4 from "../assets/website-4.png";

// ! ==== STACK DATA =====
export const stackData = [
  {
    id: 1,
    logo: <IoLogoJavascript size={25} className="fill-amber-400" />,
    title: "JavaScript",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eum!",
  },

  {
    id: 2,
    logo: <FaReact size={25} className="fill-blue-500" />,
    title: "React",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eum!",
  },

  {
    id: 3,
    logo: <RiTailwindCssFill size={25} className="fill-blue-400" />,
    title: "Tailwind CSS",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eum!",
  },

  {
    id: 4,
    logo: <SiTypescript size={25} className="fill-blue-500" />,
    title: "TypeScript",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eum!",
  },

  {
    id: 5,
    logo: <FaGithubSquare size={25} />,
    title: "Git and Github",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eum!",
  },
];

// ! ==== PROJECTS DATA =====
export const projectsData = [
  {
    id: 1,
    img: website1,
    title: "Personal Portfolio",
    category: "Web Application",
    stackUsed: [
      <FaReact size={25} className="fill-blue-500" />,
      <RiTailwindCssFill size={25} className="fill-blue-400" />,
    ],
    linkTo: "https://my-portfolio-alpha-nine-34.vercel.app/",
  },

  {
    id: 2,
    img: website2,
    title: "Easy Learn Website",
    category: "Web Application",
    stackUsed: [
      <FaReact size={25} className="fill-blue-500" />,
      <RiTailwindCssFill size={25} className="fill-blue-400" />,
    ],
    linkTo: "https://easy-learn-edx-website.vercel.app/",
  },

  {
    id: 3,
    img: website3,
    title: "Password Generator",
    category: "Utility Application",
    stackUsed: [
      <FaReact size={25} className="fill-blue-500" />,
      <RiTailwindCssFill size={25} className="fill-blue-400" />,
      <SiTypescript size={25} className="fill-blue-500" />,
    ],
    linkTo: "https://password-generator-react-js-dun.vercel.app/",
  },

  {
    id: 4,
    img: website4,
    title: "Crypto Admin Dashboard",
    category: "UI Design",
    stackUsed: [
      <FaHtml5 size={25} className="fill-orange-400" />,
      <FaCss3Alt size={25} className="fill-blue-400" />,
      <IoLogoJavascript size={25} className="fill-amber-400" />,
    ],
    linkTo: "https://crypto-investment-dashboard.vercel.app/",
  },
];
