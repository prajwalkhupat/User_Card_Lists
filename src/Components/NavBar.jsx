import React from "react";
import Image from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div className="m-10 mt-0 flex" style={{ borderBottom: "3px solid black" }}>
      <div className="ml-10 flex" style={{ alignItems: "center" }}>
        <img
          src={Image}
          alt=""
          style={{ height: "55px", marginTop: "10px" }}
          srcset=""
        />{" "}
        <h1 className="text-2xl m-5 mt-6">
          <b>
            codingskills<span className="text-blue-600/100">PLAY</span>
          </b>
        </h1>
      </div>
    </div>
  );
};
export default NavBar;


