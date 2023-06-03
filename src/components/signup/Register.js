import React, { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { registerfunction, sentOtpFunction } from "../../services/Apis";
import "./register.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
  const steps = ["Get OTP", "Validate OTP", "Sign in"];
  const [spiner,setSpiner] = useState(false);
  const navigate = useNavigate();

  const [inputdata,setInputdata] = useState({
    fname:"",
    email:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const {fname,email} = inputdata;

    if(fname === ""){
      alert("Enter Your Name")
    }else if(email === ""){
      alert("Enter Your Email")
    }else if(!email.includes("@")){
      alert("Enter Valid Email")
    }else{
      setSpiner(true)
      const response = await registerfunction(inputdata);
      if(response.status === 200){
        setInputdata({...inputdata,fname:"",email:""});
        const data = {
          email
        }
        await sentOtpFunction(data);
        setSpiner(false)
        navigate("/verify-user",{state:email})
      }else{
        alert(response.response.data.error);
      }
    }

  };

  return (
    <div className="background">
      <div className="form__container">
        <form onSubmit={submitHandler}>
          <Stepper activeStep={0} alternativeLabel>
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
          <input
            type="text"
            name="fname"
            id=""
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit">
            {spiner ? <span><CircularProgress color="inherit"/></span>:<span style={{fontWeight: "800", marginTop: "-10%"}}>Get OTP </span>}
             </button>
        </form>
      </div>
      <div className="additional_text">
        <h3 style={{fontWeight: "100"}}>
          Have an account? <span onClick={() => navigate("/")} style={{cursor: "pointer"}}>Sign in</span>
        </h3>
      </div>
      <div className="content_container">
        <h2>Create an account</h2>
        <p style={{fontWeight: "100"}}>
          is simply dummy text of the printing and type setting industry. Lorem
          Ipsum has been the insdustry's standard dummy text ever since the
          1500s, when an unknown.
        </p>
      </div>
    </div>
  );
};

export default Register;
