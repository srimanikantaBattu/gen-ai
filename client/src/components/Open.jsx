import React from "react";
function Open() {
  return (
    <div className="back relative">
      <div className="flex justify-between mx-10">
        <h1 className="mains">cineMatix</h1>
        <button
          style={{ height: "40px" }}
          className="mt-7 border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
      <div style={{height:"602px",marginLeft:"3.5rem",marginRight:"3.5rem"}} className="text-white text-center">
      <h1 style={{fontSize:"3.5rem",marginTop:"5.8rem"}} className="font-bold mb-4">Online booking, offline memories</h1>
      <h1 style={{fontSize:"1.5rem",marginBottom:"14px"}} className="">"In a world full of chaos, there's something magical about being able to book a ticket and escape into a different reality, even if just for a few hours."</h1>
      <button className="bg-white text-red-500 font-bold py-2 px-4 rounded">
            Get Started
        </button>
      </div>
      
    </div>
  );
}

export default Open;
