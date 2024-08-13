import React, { useEffect } from "react";
import "./Blog.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Blog() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
  return (
    <div id="blog" className="blog component__space" >
      <div  data-aos="fade-right" className="heading">
        <h1 className="heading text-center py-7">Latest Blog</h1>
        
       
      </div>
      <div className="container ">
          <div data-aos="fade-up" className="row  gy-3 ">
              <div className="col-md-4 ">
              <div className="project__box  pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://farjana-akter-portfolio.netlify.app/static/media/blog-02.41215205.webp" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect">
                            
                         </div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text pb-4">React Core Concept</h5>
                         <a href="https://dev.to/farjana74/react-core-concepts-4702" className="blog project__btn btn text-white border">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col-md-4">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img id = "special-img" src="https://i.ibb.co/94ZkNwL/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text text-white">Next js Concept</h5>
                         <h6 className="project__text pb-3 text-white">Comming Soon</h6>
                         <a href="#" className="blog project__btn btn border text-white">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col-md-4">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src="https://farjana-akter-portfolio.netlify.app/static/media/blog-big-01%20(1).10f81552.webp" alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text text-white">Development</h5>
                         <h6 className="project__text text-white pb-3">Comming Soon</h6>
                         <a href="#" className="blog project__btn btn border text-white">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
