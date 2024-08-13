import React, { useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Features = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
}, [])
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Website Design"
          des="I use Html,Css,React-bootstrap, Material UI, Tailwind to give a better look for Website design."
        />
        <Card
          title="Development"
          des="I use also React js, Next js, Node js and Express js for website development,use mysql and Nosql for Website development."
          icon={<CgWebsite />}
        />
        <Card
          title="SEO Optimisation"
          des="I used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable"
          icon={<SiProgress />}
        />
        <Card
          title="Strategy"
          des="I follow some strategy for functionalities to give better looks my design and development."
          icon={<FaMobile />}
        />
        <Card
          title="Figma"
          des="I'm also working with figma to make my design perfectly,  iterative design processes, and accelerated decision-making. Imagine a design team ."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I'm also working on website hosting on c-panel , for my personal project , i use firebase hosting, heroku and netlify."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
