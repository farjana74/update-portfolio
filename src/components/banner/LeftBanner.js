import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const LeftBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [text] = useTypewriter({
    words: ["Software Developer.", "Frontend Developer.", "React Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-bg-dark">WELCOME TO MY Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Farjana Akter</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        {/* paragruph here */}
      </div>
      <div
        data-aos="fade-right"
        className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between"
      >
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="">
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/farjana74">
                {" "}
                <AiOutlineGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/farjanaakther/">
                {" "}
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
