import React from "react";
import {useNavigate} from 'react-router-dom'
function Open() {
  const navigate = useNavigate();

  return (
    <div className="back relative">
      <div className="flex justify-between mx-10">
        <h1 className="mains flex"><div style={{color:"#4285F4"}}>E</div><div style={{color:"#EA4335"}}>d</div><div className="mr-3" style={{color:"#FBBC05"}}>u</div> <div>   </div> <div style={{color:"#4285F4"}}>M</div><div style={{color:"#34A853"}}>i</div><div style={{color:"#EA4335"}}>n</div><div style={{color:"#34A853"}}>i</div></h1>
        <button
          style={{ height: "40px" }}
          className="mt-7 border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
      <div style={{height:"602px",marginLeft:"3.5rem",marginRight:"3.5rem"}} className="text-white text-center">
      <h1 style={{fontSize:"3.5rem",marginTop:"5.8rem"}} className=" mb-4 font-bold">Personalized AI learning boost</h1>
      <h1 style={{fontSize:"1.5rem",marginBottom:"14px"}} className="">With AI-powered tools, we are reimagining education, creating personalized learning paths that adapt to each student's strengths and needs, ensuring no one is left behind.</h1>
      <button className="bg-white text-red-500 font-bold py-2 px-4 rounded"
        onClick={() => navigate("/register")}>
            Get Started
        </button>
      </div>
      
    </div>
  );
}

export default Open;
