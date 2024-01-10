import HeroSection from "./HeroSection";
import Categories from "./Categories";
import ProjectSection from "./ProjectSection";
const index = () => {
  return (
    <>
      <div className="flex flex-col">
        <HeroSection />
        <Categories />
        <ProjectSection />
      </div>
    </>
  );
};

export default index;
