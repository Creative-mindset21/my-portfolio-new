import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Welcome = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .to("#welcomeText", {
          opacity: 0,
        })
        .to("#welcome", {
          height: 0,
          duration: 0.8,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen px-10 py-50 lg:p-10 bg-gray-light absolute top-0 left-0 w-full flex flex-col gap-20"
      >
        <h1
          className="text-[2.3rem] md:text-7xl xl:text-[6rem] 2xl:text-[10rem] mb-0 "
          id="title-1"
        >
          Frontend Developer
        </h1>

        <h1
          className="text-5xl mb-0 md:text-7xl xl:text-[8rem] 2xl:text-[12rem]"
          id="title-2"
        >
          Designer
        </h1>

        <h1
          className="text-5xl mb-0 md:text-7xl xl:text-[8rem] 2xl:text-[12rem]"
          id="title-3"
        >
          Freelancer
        </h1>
      </div>

      <div
        id="welcome"
        className="w-screen h-screen flex bg-grey-600 justify-center place-items-center"
      >
        <h1
          id="welcomeText"
          className="text-5xl md:text-9xl font-bold text-gray-100"
        >
          Welcome.
        </h1>
      </div>
    </section>
  );
};

export default Welcome;
