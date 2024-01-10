import { useState, useEffect } from "react";
import pic1 from "../../assets/1.jpeg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [projectsbyDomain, setProjectsByDomain] = useState([]);
  const fetchprojectsbyDomain = async () => {
    try {
      const res = await fetch(
        "https://nasabackend.onrender.com/api/v1/project/projects-by-domain"
      );
      if (res.ok) {
        const data = await res.json();
        setProjectsByDomain(data);
      } else {
        console.error(
          `Failed to fetch projects by domain. Status: ${res.status}`
        );
      }
    } catch (error) {
      console.error("Error fetching projects by domain:", error);
    }
  };
  useEffect(() => {
    fetchprojectsbyDomain();
  }, []);
  return (
    <div className="w-[80vw] m-auto">
      <div className="flex my-[7rem] items-center pl-10 pr-10">
        <div className="flex w-1/2 flex-col gap-5 justify-center items-center">
          <div className="flex gap-5">
            <motion.img
              src={pic1}
              className="w-32 h-32 md:w-56 md:h-56 rounded-full animate-down-up rotate-10"
            />
            <motion.img
              src={pic2}
              className="w-32 h-32 md:w-56 rounded-xl md:h-56 animate-up-down rotate-15"
            />
          </div>
          <div className="flex justify-center mt-5">
            <motion.img
              className="h-32 md:h-56 rounded-md animate-right-left rotate-10"
              src={pic3}
            />
          </div>
        </div>
        <div className="flex w-1/2 ">
          <div className="flex flex-col justify-start mx-[2rem]">
            <p className="text-5xl text-start font-serif w-full pb-5">
              &quot;Learn how to collaborate and contribute.
            </p>
            <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
              Collaboration entails active listening, clear communication, and
              defined roles. Utilize tools, respect diverse perspectives, and
              manage time efficiently. Offer constructive feedback and seek help
              when needed. Adaptability, conflict resolution, and learning from
              others are key. Stay updated and celebrate achievements for
              effective contributions in any context.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col pl-10">
        <h2 className="text-4xl mb-3 font-bold">
          Explore Open Science Projects
        </h2>
        <h2 className="text-3xl font-semibold"></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-10 gap-5 md:gap-0">
          {projectsbyDomain.map((data, index) => {
            return (
              <div
                key={index}
                className="md:w-[20vw] border border-black rounded-lg p-5 bg-white shadow-xl"
              >
                <h3 className=" text-lg md:text-xl font-semibold">
                  {data._id}
                </h3>
                <div className="md:px-3 pt-2">
                  <p className="flex gap-1 md:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_63_718)">
                        <rect width="20" height="19" fill="#B7EFFB" />
                        <path
                          d="M14.8333 15.7268C14.7645 16.4135 14.2828 16.9467 13.5684 17.07C12.6077 17.2358 10.9191 17.4167 8.125 17.4167C5.33092 17.4167 3.64232 17.2358 2.68159 17.07C1.96715 16.9467 1.48552 16.4135 1.4167 15.7268C1.33386 14.9003 1.25 13.5074 1.25 11.2551C1.25 9.00283 1.33386 7.60989 1.4167 6.78335C1.48552 6.09666 1.96819 5.56323 2.68263 5.44001C2.75631 5.4273 2.83427 5.41452 2.91667 5.40173"
                          stroke="#1E3BA0"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.23908 1.65967C9.00183 1.59759 9.74358 1.90312 10.2466 2.45131L10.6893 2.93375C11.0058 3.27868 11.464 3.47666 11.9456 3.47666H16.3067C17.607 3.47666 18.6889 4.42397 18.7236 5.65885C18.74 6.24275 18.75 6.91661 18.75 7.69249C18.75 9.94478 18.6661 11.3377 18.5833 12.1642C18.5145 12.8509 18.0328 13.3841 17.3184 13.5074C16.3577 13.6731 14.6691 13.8541 11.875 13.8541C9.08092 13.8541 7.39233 13.6731 6.43158 13.5074C5.71717 13.3841 5.23554 12.8509 5.16671 12.1642C5.08387 11.3377 5 9.94478 5 7.69249C5 5.44019 5.08387 4.04726 5.16671 3.22074C5.23554 2.53403 5.71821 2.00062 6.43263 1.87741C6.87125 1.80176 7.46146 1.72298 8.23908 1.65967Z"
                          stroke="#1E3BA0"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_718">
                          <rect width="20" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {data.total} Projects
                  </p>
                  <p className="flex gap-1 md:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z"
                        fill="#1E3BA0"
                        stroke="#222222"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9L15 9"
                        stroke="#222222"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 13H12"
                        stroke="#222222"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {data.feed} Feed
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
