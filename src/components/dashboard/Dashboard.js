import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [userData ,setUserData] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const name = localStorage.getItem("name")
        const email = localStorage.getItem("email")
        const verified = localStorage.getItem("verified")
        const token = localStorage.getItem("token")
        setUserData({
            name,email,token,verified
        })
    },[])

    const logoutHandler = () => {
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('verified')
      localStorage.removeItem('token')
      navigate("/");
      
    }

  return (
    <div className="background">
        <div></div>
        <div className="back__button">
            <button onClick={logoutHandler}><FaAngleLeft size={20}/></button>
            <span style={{marginLeft: "10px", color: "white"}}>back</span>
        </div>
        <div className="home__conatiner">
        <div className="home__content">
        <h3>Name<span style={{fontWeight: "100", color: "white", marginLeft: "15px"}}>{userData.name}</span></h3>
        <h3>Email<span style={{fontWeight: "100", color: "white", marginLeft: "15px"}}>{userData.email}</span></h3>
        <h3>Email Status<span style={{fontWeight: "100", color: "white", marginLeft: "15px"}}>{userData.verified}</span></h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
