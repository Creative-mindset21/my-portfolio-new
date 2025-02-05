import { FaCss3Alt, FaReact } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Experience = () => {
  return (
    <section>
      <h1>Experience</h1>

      <ul className="flex flex-col md:flex-row justify-between mt-4 gap-6 pr-6">
        <li className="experience">
          <div className="flex flex-col gap-5 basis-[50%]">
            <h2>Work Experience</h2>

            <div className="flex flex-col gap-2">
              <h3>Easy-Learn Frontend Developer</h3>

              <small>JAN 2025 - present</small>

              <span className="max-w-[25rem]">
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

          <div className="border border-[#51535c] mr-10"></div>

          <div className=" flex flex-col gap-4 basis-[50%] my-auto">
            <h2 className="font-bold tracking-widest">Soft Skills</h2>

            <div className="flex flex-col gap-5">
              <span className="max-w-[90%] flex items-center gap-2">
                <GoDotFill /> Effective Communication
              </span>

              <span className="max-w-[90%] flex items-center gap-2">
                <GoDotFill /> Teamwork
              </span>

              <span className="max-w-[90%] flex items-center gap-2">
                <GoDotFill /> Good time management
              </span>

              <span className="max-w-[90%] flex items-center gap-2">
                <GoDotFill /> Continuous Learning
              </span>
            </div>
          </div>
        </li>

        <li className="basis-[40%] experience">
          <div>
            <h2 className="text-xl pb-4">Education</h2>

            <div className="flex flex-col gap-2">
              <h3>Bedford College, Bedford</h3>
              <small> September 2023 - present</small>
              <p className="leading-relaxed">
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
