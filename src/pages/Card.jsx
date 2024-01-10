import { useState } from "react";
import "./Card.css";

function Card() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="card">
      <h2>Join as Collaborator or Creator</h2>
      <div className="sub-cards-container">
        <div
          className={`sub-card ${
            selectedOption === "projectManager" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("projectManager")}
        >
          <div className="circle"></div>
          <p>Hello, I am a Project Manager looking for contributors</p>
        </div>
        <div
          className={`sub-card ${
            selectedOption === "collaborator" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("collaborator")}
        >
          <div className="circle"></div>
          <p>Hello, I am a Collaborator looking for work</p>
        </div>
      </div>
      <button className="create-button">Create</button>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Card;
