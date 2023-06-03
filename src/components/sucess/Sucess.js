import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="background">
      <div></div>
      <div style={{marginTop: "50px"}}>
        <h2
          style={{
            color: "#00ff66",
            backgroundColor: "#171717",
            width: "250px",
            height: "40px",
            textAlign: "center",
            borderRadius: "10px",
            marginTop: "15px",
          }}
        >
          Successful
        </h2>
      </div>
      <div></div>
    </div>
  );
};

export default Success;
