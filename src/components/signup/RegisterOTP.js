import React, { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { userVerify } from "../../services/Apis";
import "./register.css";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterOTP = () => {
  const steps = ["Get OTP", "Validate OTP", "Sign in"];
  const [otp, setUserOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const verifyOtp = async (e) => {
    e.preventDefault();
    if(otp === ""){
      alert("Enter otp")
    } else if(otp.length < 6){
      alert("Enter valid otp")
    }else{
      const data = {
        otp,email:location.state
      }
      const response = await userVerify(data);
      console.log("this is the res",response)
      if(response.status === 200){
          navigate("/sucessfully-verified");      
      }
    }
  }

  return (
    <div className="background">
      <div className="form__container">
        <form onSubmit={verifyOtp}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .MuiStepIcon-root.Mui-completed": {
                    color: "#00FF66", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "white", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#00FF66", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "#00FF66", // Just text label (ACTIVE)
                    },
                }}
              >
                <StepLabel style={{ color: "#00FF66" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* <input type="text" name="fname" id="" onChange={handleChange} placeholder='Name' /> */}
          <br />
          <br />
          <br />
          <input
            type="number"
            name="email"
            id=""
            onChange={(e) => setUserOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button type="submit">
            <span style={{ fontWeight: "800" }}>Validate OTP</span>
          </button>
        </form>
      </div>
      {/* <div className="additional_text">
        <h3>Have an account? <span>Sign in</span></h3>
      </div> */}
      <div className="content_container">
        <h2>Validate your OTP</h2>
        <p>
          is simply dummy text of the printing and type setting industry. Lorem
          Ipsum has been the insdustry's standard dummy text ever since the
          1500s, when an unknown.
        </p>
      </div>
    </div>
  );
};

export default RegisterOTP;
