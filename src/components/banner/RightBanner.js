import React, { useEffect } from 'react'
import { bannerImg } from "../../assets/index";
import {removeBg} from "../../assets/index"
import AOS from 'aos';
import 'aos/dist/aos.css';
const RightBanner = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
}, [])
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* <img data-aos="fade-up"
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={removeBg}
        alt="bannerImg"
      /> */}

<p className="text-base font-bodyFont leading-6 tracking-wide pb-5 ">
          Experienced Front End Developer with a 3 years track record in the
          industry, specializing in expertise in React, JavaScript, TypeScript,
          Node js and adept at contributing to diverse web applications in SaaS
          environments, I uniquely blend technical prowess with a rich
          multicultural background, and emphasizing tangible contributions to
          organizational growth. Recognized for quantifiable measures in driving
          success, I thrive in the era of AI and automation, showcasing
          adaptable skills, Eager to enhance user-centric applications and
          deliver high-quality, reusable UI components for monitoring solutions
          and fostering strong teamwork for a dynamic and inclusive work
          environment.
        </p>
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner