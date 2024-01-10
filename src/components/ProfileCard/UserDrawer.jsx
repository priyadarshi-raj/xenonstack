import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

const UserDrawer = () => {
  const [auth, setAuth] = useAuth();
  const [userData] = useState({
    profileCompletion: 100,
    name: "Lavesh Bhardwaj",
    email: "lavesh@example.com",
    profileImage: "https://bit.ly/46GAhlN",
    rating: 4.5,
    ranking: 120,
    projectCount: 8,
  });

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    localStorage.clear();
  };
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-2/3 md:w-1/4 min-h-full bg-white text-black z-50">
        <div className="h-fullbg-white transform transition-transform duration-500 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Profile</h1>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              ✕
            </button>
          </div>
          <hr className="my-6" />
          <img
            src={userData.profileImage}
            alt="profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <div className="text-center mt-4">
            <p className="font-semibold">{userData.name}</p>
            <p className="text-sm text-gray-500 mb-4">{userData.email}</p>
            <div className="flex justify-between text-sm mb-4">
              <a
                href="/rating"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
              >
                <span role="img" aria-label="star">
                  ⭐️
                </span>{" "}
                {userData.rating}
              </a>
              <a
                href="/ranking"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
              >
                <span role="img" aria-label="graph">
                  📊
                </span>{" "}
                {userData.ranking}
              </a>
              <a
                href="/projects"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
              >
                <span role="img" aria-label="project">
                  📁
                </span>{" "}
                {userData.projectCount}
              </a>
            </div>
            <NavLink
              to="/profile"
              className={`w-full p-2 rounded mt-4 transition duration-300 ease-in-out ${
                userData.profileCompletion === 100
                  ? "bg-blue-500 text-white hover:bg-blue-700"
                  : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {userData.profileCompletion === 100
                ? "Edit Profile"
                : "Complete Profile"}
            </NavLink>
          </div>
          <hr className="my-6" />
          <h2 className="font-medium mb-4">For User:</h2>
          <ul className="mb-6 space-y-2 flex flex-col w-full">
            {[
              "Invitations",
              "Notifications",
              "Projects/Feed",
              "Chat History",
              "Settings",
            ].map((option) => (
              <NavLink
                to={`/${option.toLowerCase()}`}
                key={option}
                className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer"
              >
                {option}
              </NavLink>
            ))}
          </ul>
          <hr className="my-6" />
          <button
            onClick={() => handleLogout()}
            className="w-full bg-transparent border border-red-500 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </ul>
    </div>
  );
};

export default UserDrawer;
