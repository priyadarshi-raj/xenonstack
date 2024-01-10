import Titlebar from "./Titlebar";
import ProjectDetails from "./ProjectDetails";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useEffect } from "react";
const Listing = () => {
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();
  useEffect(() => {
    if (!auth?.token) {
      navigate("/register")
    }
  }, []);
  return (
    <div className="py-10 px-1 flex flex-col gap-4">
      <Titlebar />
      <ProjectDetails />
    </div>
  );
};

export default Listing;
