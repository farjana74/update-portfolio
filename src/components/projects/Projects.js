import React, { useEffect } from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
}, [])
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div  data-aos="fade-right" className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Video Sharing with social Ecommerce (Admin Panel)"
          des=" It is an admin panel of a fanfare app.  
          It’s also a Social-Commerce app focusing on shoppable videos for brand marketing..
          Fanfare empowers users to create and upload videos of their favorite brands and products onto our video-sharing platform
          "
          link="https://admin.fanfarebd.com/"
          src={projectOne}
        />
        <ProjectsCard
          title="Unique Regency - Hotel, Restaurant, and cafe booking system web app"
          des="It is a booking system web app where users can book hotels, restaurants and cafes.  
          It also includes an authentication system for every role.
          Admin can manages her system
          "
          link="https://uniqueregencybd.com/"
          src={projectTwo}
        />
        <ProjectsCard
          title="Radio Station App"
          des="Radio station app with authentication system.After login( google ,email/password) admin can show her dashboard and he can add her upcoming shows that are shown in UI. Admin can also manage her shows"
          src={projectThree}
          link="https://radio-station-80e3e.web.app/"
        />
        <ProjectsCard
          title="NFT e-store web page "
          des=" It's Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets. It's has also include collection featured nets"
          src={projectFour}
          link="https://nft-estore.vercel.app/"
        />
        <ProjectsCard
          title="Rotors-Car selling App"
          des="E-commerce App with google & email password login Complete Web Application. Users can order,cancel products and give feedback ,admin can add or delete products ,manage orders and make admin through the website"
          src={projectFive}
          link="https://car-portal-ac20a.web.app/"
        />
        <ProjectsCard
          title="Book shop-[Online-book-shop]"
          des="Its include many varites of books.Its's a online shop where user can find her desired books and easily buy books, that's design are included in this web app"
          src={projectSix}
          link="https://objective-wilson-67eb40.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
