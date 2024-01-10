import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Searchbar from "./Searchbar";
import CreateFeed from "./CreateFeed";
import ProjectSection from "./ProjectSection";
import TopCollaborators from "./TopCollaborators";
import CollaboratorSection from "./CollaboratorSection";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [collaborator, setCollaborator] = useState(true);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    if (!auth?.token) {
      navigate("/register");
    }
  }, []);
  return (
    <div className="">
      <div className="">
        <HeroSection />
        <div className="flex justify-between px-3 md:px-10 pt-5 py-10">
          <Searchbar />
          <CreateFeed />
        </div>
        <div className="flex justify-between pr-5">
          <button
            type="button"
            className="text-black bg-rose-500 px-5 py-2 ml-10 rounded"
            onClick={() => setCollaborator(!collaborator)}
          >
            click here to see - collaborator Status :{" "}
            {collaborator ? "True" : "False"}
          </button>
          {!collaborator && (
            <NavLink
              to="/listing"
              className="hover:-translate-y-1 active:translate-y-0 transition h-max py-3 mr-5 bg-[#003366] text-white px-2 md:px-5 rounded flex justify-center place-items-center gap-3 hover:opacity-70"
            >
              <p>New Project</p>
              <p className="bg-white rounded-full text-black w-5 h-5 flex justify-center items-center">
                +
              </p>
            </NavLink>
          )}
        </div>
      </div>
      {collaborator ? <CollaboratorSection /> : <ProjectSection />}
      <TopCollaborators />
    </div>
  );
};

export default Dashboard;
