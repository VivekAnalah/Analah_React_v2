import React from 'react';
import "../Styles/orbitingIcons.css";

export const OrbitingIcons = () => {
  return (
    <div class="containerOrbit">
<div class="orbit">
    <div class="center-image">
      <img src={require("../Assets/Insurance_Images/Center_ins_img.png")} alt="Center" />
    
    </div>
    <ul>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Car_ins_logo.png")} alt="Car" /></div>
      
      </li>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Family_ins_logo.png")} alt="Family" /></div>
       
      </li>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Term_ins_logo.png")} alt="Term" /></div>
       
      </li>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Home_ins_logo.png")} alt="" /></div>
      
      </li>
   
    </ul>
  </div>

  <div class="orbit2">
    <ul>
    <li>
        <div><img src={require("../Assets/Insurance_Images/Travel_ins_logo.png")} alt="" className="max-w-[70%]" /></div>
        {/* <p>Investment Insurance</p> */}
      </li>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Health_ins_logo.png")} alt="" className="max-w-[70%]" /></div>
        {/* <p>Guaranteed Returne Plans</p> */}
      </li>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Group_ins_logo.png")} alt="" className="max-w-[70%]" /></div>
        {/* <p>Group Health Insurnace</p> */}
      </li>
      <li>
        <div><img src={require("../Assets/Insurance_Images/Retirement_ins_logo.png")} alt="" className="max-w-[70%]" /></div>
        {/* <p>Retirement Plans</p> */}
      </li>
      
    </ul>
  </div>

  <div id="bike" class="iconsSize">
    <img src={require("../Assets/Insurance_Images/Bike_ins_logo.png")} alt="" />
  </div>

  <div id="heart" class="iconsSize">
  <img src={require("../Assets/Insurance_Images/health_ins_img.png")} alt="" />
  </div>

  <div id="investment" class="iconsSize">
  <img src={require('../Assets/Insurance_Images/Investment_ins_logo.png')} alt="" />
  </div>

  <div id="guaranteed" class="iconsSize">
  <img src={require("../Assets/Insurance_Images/Guaranteed_ins.png")} alt="" />
  </div>
    </div>
  )
}
