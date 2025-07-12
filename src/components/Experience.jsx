import { FaCss3Alt, FaReact } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { NavLink } from "react-router";

const Experience = () => {
  return (
    <section>
      <h1>Experience</h1>

      <ul className="flex flex-col lg:flex-row mt-4 gap-4 pr-6 xl:pr-0">
        <li className="experience basis-[99%]">
          <div className="flex flex-col gap-5 basis-[50%] pr-4 xl:border-r border-[#51535c]">
            <h2>Recent Work Experience</h2>

            <div className="flex flex-col gap-2">
              <h3>Learn With Ease</h3>

              <small>March 2025 - June 2025</small>

              <span className="max-w-[95%]">
                I developed and maintained an online tuition website utilising
                modern technologies, including NextJS for the frontend and
                MongoDB for the backend.
              </span>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://www.learnwithease.org/"
                  target="_blank"
                  className="flex gap-2 items-center bg-gray-light p-2.5 rounded-md duration-500 hover:shadow hover:shadow-[rgba(197,195,195,0.3)] self-start"
                >
                  <IoIosLink size={20} />
                  <span className="text-sm">Live Demo</span>
                </a>

                <NavLink
                  to="projects"
                  className="flex gap-2 items-center bg-gray-light py-2.5 px-3 rounded-md duration-500 hover:shadow hover:shadow-[rgba(197,195,195,0.3)] self-start"
                >
                  <MdPlayArrow size={20} />
                  <span className="text-sm">View All Projects</span>
                </NavLink>
              </div>
            </div>

            {/* <div className="flex gap-4">
              <div className="experienceStack">
                <FaReact size={20} className="fill-blue-500" />
                <span>React</span>
              </div>

              <div className="experienceStack">
                <FaCss3Alt size={20} className="fill-blue-500" />
                <span>CSS</span>
              </div>
            </div> */}
          </div>

          <div className=" flex flex-col gap-4 basis-[50%]">
            <h2 className="font-bold tracking-widest">Soft Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              <span className="max-w-[90%] flex items-center gap-2 text-sm lg:text-base">
                <GoDotFill size={20} /> Effective Communication
              </span>

              <span className="max-w-[90%] flex items-center gap-2 text-sm lg:text-base">
                <GoDotFill size={20} /> Teamwork
              </span>

              <span className="max-w-[90%] flex items-center gap-2 text-sm lg:text-base">
                <GoDotFill size={20} /> Good time management
              </span>

              <span className="max-w-[90%] flex items-center gap-2 text-sm lg:text-base">
                <GoDotFill size={20} /> Continuous Learning
              </span>
            </div>
          </div>
        </li>

        <li className="xl:max-w-[30%] 2xl:max-w-[40%] experience">
          <div className="">
            <h2 className="text-xl pb-4">Education</h2>

            <div className="flex flex-col gap-2">
              <h3>Bedford College, Bedford</h3>
              <small> September 2023 - June 2025</small>
              <p className="leading-relaxed text-sm md:text-base">
                A Level 3 BTEC in Advanced Computing, where I focused on various
                areas like{" "}
                <ul>
                  <li>Software Design and Development</li>
                  <li>Computer Games Development</li>
                  <li>Website Development & Cyber Security</li>
                </ul>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
