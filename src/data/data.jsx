import { FaCss3Alt, FaGithubSquare, FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

// ! ===== IMPORT WEBSITE IMAGES =====
import website1 from "../assets/website-1.png";
import website2 from "../assets/website-2.png";
import website3 from "../assets/website-3.png";
import website5 from "../assets/website-5.png";
import website6 from "../assets/website-6.png";

// ! ==== STACK DATA =====
export const stackData = [
  {
    id: 1,
    logo: <IoLogoJavascript size={25} className="fill-amber-400" />,
    title: "JavaScript",
    desc: "Interactive and provide functionality to web applications",
  },

  {
    id: 2,
    logo: <FaReact size={25} className="fill-blue-500" />,
    title: "React",
    desc: "Build user interfaces and create reuseable UI components",
  },

  {
    id: 3,
    logo: <RiTailwindCssFill size={25} className="fill-blue-400" />,
    title: "Tailwind CSS",
    desc: "Rapid UI development and create responsive designs using utility classes",
  },

  {
    id: 4,
    logo: <SiTypescript size={25} className="fill-blue-500" />,
    title: "TypeScript",
    desc: "Improves code quality and maintainbility by adding static typing",
  },

  {
    id: 5,
    logo: <FaGithubSquare size={25} />,
    title: "Git and Github",
    desc: "A version control system and a cloud based platform for collaboration and project management",
  },

  {
    id: 6,
    logo: <FaPython size={25} className="fill-yellow-500" />,
    title: "Python",
    desc: "A versatile and powerful programming language known for its simplicity and readability.",
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
    githubLink: "https://github.com/Creative-mindset21/my-portfolio-new",
  },

  {
    id: 2,
    img: website2,
    title: "Learn With Ease Website",
    category: "Web Application",
    stackUsed: [
      <FaReact size={25} className="fill-blue-500" />,
      <FaCss3Alt size={25} className="fill-blue-400" />,
    ],
    linkTo: "https://learnwithease.org",
    githubLink: "https://github.com/Creative-mindset21/easy-learn-edx-website",
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
    githubLink:
      "https://github.com/Creative-mindset21/password-generator-react.js",
  },

  {
    id: 4,
    img: website5,
    title: "Shop Station",
    category: "Web Application",
    stackUsed: [
      <FaReact size={25} className="fill-blue-500" />,
      <RiTailwindCssFill size={25} className="fill-blue-400" />,
    ],
    linkTo: "https://shopstation.ng/",
    githubLink: "#",
  },

  {
    id: 5,
    img: website6,
    title: "DBODY NG.",
    category: "Web Application",
    stackUsed: [
      <FaReact size={25} className="fill-blue-500" />,
      <RiTailwindCssFill size={25} className="fill-blue-400" />,
    ],
    linkTo: "https://dbodyng.shop/",
    githubLink: "#",
  },
];
