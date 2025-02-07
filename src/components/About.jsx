import myImg from "../assets/my-img.jpg";
import Experience from "./Experience";
import Stack from "./Stack";

const About = () => {
  return (
    <section className="aboutContainer">
      <div className="flex flex-col xl:flex-row justify-between xl:items-center">
        <div className="xl:max-w-[50%] max-w-[90%]">
          <h1>About me</h1>

          <p className="mb-5 xl:max-w-[90%] text-white-500 text-lg">
            Frontend developer based in Bedford, United Kingdom, dedicated to
            creating{" "}
            <span className="text-grey-text">
              responsive and user-friendly web applications
            </span>{" "}
            with a strong focus on performance and design.
          </p>

          <p className="xl:max-w-[90%] text-white-500 text-xl">
            I thrive on collaboration and continuously seek to improve my skills
            and stay updated with the latest technologies.
          </p>
        </div>

        <figure className="navImg w-60 h-60 xl:w-90 xl:h-90 p-4 -order-1 xl:order-1 mx-0 mt-0">
          <img
            src={myImg}
            alt="my image"
            className="w-full h-[auto] object-top rounded-3xl"
          />
        </figure>
      </div>

      <Stack />
      <Experience />
    </section>
  );
};

export default About;
