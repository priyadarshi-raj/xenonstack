import { Button, Link } from "@nextui-org/react";
import pic4 from "../../assets/4.png";

const Projects = () => {
  const buttonLabels = [
    "Life Sciences & Biology",
    "Medicine & Healthcare",
    "Physical & Particle Research",
    "Astronomy & Space Exploration",
    "Chemistry & Materials Science",
    "Environmental Science",
    "Data Science & AI",
    "Social Sciences",
    "Archaeology & Anthropology",
    "Engineering & Technology",
  ];
  return (
    <div className="flex h-112 pl-20 pr-10 bg-white">
      <div className="flex flex-col flex-wrap gap-4 w-2/3 justify-evenly">
        <h1 className="flex text-3xl">Explore Open Science projects...</h1>
        <div className="flex gap-4 w-full h-88 ">
          <div className="flex flex-col gap-4 w-1/2 ">
            {buttonLabels.slice(0, 5).map((label, index) => (
              <Button
                key={index}
                variant="ghost"
                color="primary"
                className="h-12"
              >
                <Link to={`/${label.replace(/ /g, "-")}`} className="text-blue">
                  {label}
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-1/2 ">
            {buttonLabels.slice(5, 10).map((label, index) => (
              <Button
                key={index}
                variant="ghost"
                color="primary"
                className="h-12"
              >
                <Link to={`/${label.replace(/ /g, "-")}`} className="text-blue">
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-1/2">
        <img src={pic4} className="h-3/4 m-auto rounded-lg"></img>
      </div>
    </div>
  );
};

export default Projects;
