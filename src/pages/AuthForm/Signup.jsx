import { useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    axios
      .post("https://nasabackend.onrender.com/api/v1/auth/register", {
        name,
        email,
        password,
        confirmpassword,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert("Error in Registration!");
        console.log(error);
      });
  };

  return (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-3 pb-3">Sign Up</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-style"
              placeholder="Full Name"
              aria-label="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2 flex gap-2 items-center">
            <input
              type="email"
              className="form-style"
              placeholder="Email"
              aria-label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Password"
              aria-label="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              name="confirm-password"
              value={confirmpassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <Button
            color="primary"
            type="submit"
            className="mt-4"
            onClick={handleSignup}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
