import myImg from "../assets/my-img.jpg";
import Experience from "./Experience";
import Stack from "./Stack";

const About = () => {
  return (
    <section className="aboutContainer">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="md:max-w-[50%] max-w-[90%]">
          <h1>About me</h1>

          <p className="mb-5 md:max-w-[90%] text-white-500 text-lg">
            Frontend developer based in Bedford, United Kingdom, dedicated to
            creating{" "}
            <span className="text-grey-text">
              responsive and user-friendly web applications
            </span>{" "}
            with a strong focus on performance and design.
          </p>

          <p className="md:max-w-[90%] text-white-500 text-xl">
            I thrive on collaboration and continuously seek to improve my skills
            and stay updated with the latest technologies.
          </p>
        </div>

        <figure className="navImg w-60 h-60 md:w-90 md:h-90 p-4 -order-1 md:order-1 mx-0 mt-0">
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
