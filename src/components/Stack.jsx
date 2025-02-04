import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Stack = () => {
  return (
    <section>
      <h1 className="mb-6">My Stack</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pr-4">
        <li className="card">
          <div>
            <div className="bg-grey-600 p-2">
              <IoLogoJavascript className="fill-amber-400" size={25} />
            </div>
            <span>JavaScript</span>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            maiores.
          </div>
        </li>

        <li className="card">
          <div>
            <div className="bg-grey-600 p-2">
              <FaReact size={25} className="fill-blue-500" />
            </div>
            <span>React</span>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            maiores.
          </div>
        </li>

        <li className="card">
          <div>
            <div className="bg-grey-600 p-2">
              <RiTailwindCssFill size={25} className="fill-blue-500" />
            </div>
            <span>Tailwind CSS</span>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            maiores.
          </div>
        </li>

        <li className="card">
          <div>
            <div className="bg-grey-600 p-2">
              <SiTypescript size={25} className="fill-blue-500" />
            </div>
            <span>Typescript</span>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            maiores.
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Stack;
