import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { AiOutlineGithub } from 'react-icons/ai';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Farjana Akter</h3>
        <h6 className="text-lg font-normal text-gray-400 m-0">
          Frontend Developer
        </h6>
        <p className="text-base text-gray-400 tracking-wide text-black">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio. */}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+447438 334995</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">farjanaCse74@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
          <a href="https://github.com/farjana74">
                {" "}
                <AiOutlineGithub/>
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
    </div>
  );
}

export default ContactLeft