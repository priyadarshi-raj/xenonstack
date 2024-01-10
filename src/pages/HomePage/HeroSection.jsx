import { NavLink } from "react-router-dom";
import pic1 from "../../assets/1.jpeg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpeg";
import { motion } from "framer-motion";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import group1 from "../../assets/home/homepg-sec1.png";
const HeroSection = () => {
  return (
    <div>
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
        <div className="flex w-1/2">
          <div className="flex flex-col justify-start">
            <p className="text-5xl text-start font-serif w-full pb-5">
              &quot;Crafting Tomorrow&apos;s Breakthroughs Today - Explore Open
              Science
            </p>
            <Button variant="flat" color="primary" className="mt-4 w-1/2">
              <NavLink to="/register">Join the Largest Community</NavLink>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex h-96 pl-10 pr-10 bg-white items-center">
        <div className="w-2/3 flex flex-col pl-10">
          <h1 className="text-4xl mb-3 font-bold">
            What&apos;s great about us?
          </h1>
          <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
            “We pride ourselves on being the driving force behind a new era of
            Open Science collaboration. What truly sets us apart is our
            relentless commitment to fostering innovation and discovery. Our
            AI-powered platform is revolutionizing the way creators and
            collaborators connect. We provide personalized project
            recommendations, ensuring that your skills and passions find their
            perfect match. With seamless communication tools, we&apos;re
            breaking down boundaries and uniting brilliant minds worldwide.”
          </p>
          <div className="flex mt-5">
            <ButtonGroup color="primary">
              <Button>Be a Creator</Button>
              <Divider orientation="vertical" className="bg-black" />
              <Button>Be a Collaborator</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="w-1/3">
          {/* <img src={group1} /> */}
          <img src={group1} alt="Description" className="float" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
