import { useState } from "react";
import "./ResetPassword.css";
import {useNavigate} from "react-router-dom"
import axios from "axios"
const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://nasabackend.onrender.com/api/v1/auth/reset-password", {
        email,
        password,
      });
      if (res && res.data.success) {
        alert(res.data && res.data.message);
        navigate("/register");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="reset-password-section">
      <h2>Reset Password</h2>
        <div className="form-group">
          <label>Enter your Email</label>
          <input
            type="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={password} onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResetPassword;
