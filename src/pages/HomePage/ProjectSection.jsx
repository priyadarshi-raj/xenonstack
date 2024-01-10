import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.jfif";
import l4 from "../../assets/l4.png";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
const ProjectSection = () => {
  const [projects,setProjects]=useState([
  ]);
  const fetchData=async ()=>{
    const res=await fetch("https://nasabackend.onrender.com/api/v1/project/latest-projects")
    const data=await res.json()
    setProjects(data)
  }
  useEffect(()=>{
    fetchData();
  },[])
  useEffect(() => {
    fetchData();
  }, []);
  const data1 = [
    {
      title: "abcd for abceefasdasndm ",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasda sndm;cvzs",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdas ndm;cvzsan",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsandm",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsand",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasda sndm;cvzs",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdas ndm;cvzsan",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsandm",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsand",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasda sndm;cvzs",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdas ndm;cvzsan",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsandm",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsand",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasda sndm;cvzs",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdas ndm;cvzsan",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsandm",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsand",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
  ];
  return (
    <div className="flex flex-col h-172 pl-20 bg-white justify-between">
      <div className="flex h-fit flex-col">
        <h1 className="text-2xl mb-3">Top Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 1500,
            }}
            breakpoints={{
              768: {},
            }}
            modules={[Autoplay]}
            className="mySwiper-homepg"
          >
            {projects.map((val, index) => {
              return (
                <SwiperSlide key={index}>
                  <NavLink to={`/projects/${val._id}`}>
                    <ProjectCard
                      name={val.title}
                      category={val.domain}
                      src={`http://localhost:8989/api/v1/project/projectphoto/${val._id}`}
                    />
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="flex h-fit flex-col py-10">
        <h2 className="text-2xl mt-2">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-[10vh] mt-3 p-3">
          {[l1, l2, l3, l4].map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              className="flex h-20 m-4"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
