import { FaCss3Alt, FaReact } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Experience = () => {
  return (
    <section>
      <h1>Experience</h1>

      <ul className="flex flex-col lg:flex-row mt-4 gap-4 pr-6 xl:pr-0">
        <li className="experience basis-[99%]">
          <div className="flex flex-col gap-5 basis-[50%] pr-4 xl:border-r border-[#51535c]">
            <h2>Work Experience</h2>

            <div className="flex flex-col gap-2">
              <h3>Easy-Learn Frontend Developer</h3>

              <small>JAN 2025 - present</small>

              <span className="max-w-[95%]">
                Developed and maintained an online tuition website using modern
                technologies such as React for the frontend and PostgreSQL for
                backend
              </span>
            </div>

            <div className="flex gap-4">
              <div className="experienceStack">
                <FaReact size={20} className="fill-blue-500" />
                <span>React</span>
              </div>

              <div className="experienceStack">
                <FaCss3Alt size={20} className="fill-blue-500" />
                <span>CSS</span>
              </div>
            </div>
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
              <small> September 2023 - present</small>
              <p className="leading-relaxed text-sm md:text-base">
                I am currently pursuing my Level 3 BTEC in Computing, focusing
                on Software Design and Development, Computer Games Development,
                Website Development, IT System Security, and many more.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
