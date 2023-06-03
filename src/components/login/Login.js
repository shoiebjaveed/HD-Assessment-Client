import React, { useState } from "react";
import { sentOtpFunction } from "../../services/Apis";
import "./login.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState(false);
  console.log(email);

  const sendOtp = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Enter Email");
    } else if (!email.includes("@")) {
      alert("Enter valid email");
    } else {
      setSpiner(true);
      const data = {
        email: email,
      };
      const response = await sentOtpFunction(data);
      if (response.status === 200) {
        setSpiner(false);
        navigate("verify-email", { state: email });
      } else {
        alert(response.response.data.error);
        navigate("/register-user");
      }
    }
  };

  return (
    <div className="background">
      <div className="form__container">
        <form onSubmit={sendOtp}>
          <br />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">
            {spiner ? (
              <span>
                <CircularProgress color="inherit" />
              </span>
            ) : (
              <span style={{ fontWeight: "800", marginTop: "-10%" }}>
                Get OTP{" "}
              </span>
            )}
          </button>
        </form>
      </div>
      <div className="additional_text">
        <h3 style={{ fontWeight: "100" }}>
          Have an account?{" "}
          <span
            onClick={() => navigate("/register-user")}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </span>
        </h3>
      </div>
      <div className="content_container">
        <h2>
          <span style={{ fontWeight: "800" }}>Login</span>
        </h2>
        <p style={{ fontWeight: "100" }}>
          is simply dummy text of the printing and type setting industry. Lorem
          Ipsum has been the insdustry's standard dummy text ever since the
          1500s, when an unknown.
        </p>
      </div>
    </div>
  );
};

export default Login;
