import aboutImg from "../assets/about-img.jpg";
import Experience from "./Experience";
import Stack from "./Stack";

const About = () => {
  return (
    <section className="aboutContainer">
      <div className="flex flex-col xl:flex-row justify-between xl:items-center">
        <div className="xl:max-w-[50%] max-w-[90%]">
          <h1>About me</h1>

          <p className="mb-5 xl:max-w-[90%] text-white-500 text-xl leading-relaxed">
            A Front End Developer focused on creating user-friendly and
            functional web applications. A 2025 WorldSkills UK Finalist who
            combine design and performance to deliver impactful digital
            solutions.
          </p>
        </div>

        <figure className="navImg w-60 h-60 xl:w-90 xl:h-90 p-4 -order-1 xl:order-1 mx-0 mt-0">
          <img
            src={aboutImg}
            alt="my image"
            className="w-full h-[auto]  rounded-3xl"
          />
        </figure>
      </div>

      <Stack />
      <Experience />
    </section>
  );
};

export default About;
