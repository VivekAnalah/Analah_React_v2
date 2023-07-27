import React from 'react';
import "../Styles/orbitingIcons.css";

export const OrbitingIcons = () => {
  return (
    <div class="containerOrbit">
<div class="orbit">
    <div class="center-image">
      <img src={require("./Assets/Center.png")} alt="" />
    
    </div>
    <ul>
      <li>
        <div><img src={require("./Assets/Car_ins_logo.png")} alt="Car" /></div>
      
      </li>
      <li>
        <div><img src={require("./Assets/Family_ins_logo.png")} alt="Family" /></div>
       
      </li>
      <li>
        <div><img src={require("./Assets/Term_ins_logo.png")} alt="Term" /></div>
       
      </li>
      <li>
        <div><img src={require("./Assets/Home_ins_logo.png")} alt="" /></div>
      
      </li>
   
    </ul>
  </div>

  <div class="orbit2">
    <ul>
    <li>
        <div><img src={require("./Assets/Travel_ins_logo.png")} alt="" /></div>
        {/* <p>Investment Insurance</p> */}
      </li>
      <li>
        <div><img src={require("./Assets/Health_ins_logo.png")} alt="" /></div>
        {/* <p>Guaranteed Returne Plans</p> */}
      </li>
      <li>
        <div><img src={require("./Assets/Group_ins_logo.png")} alt="" /></div>
        {/* <p>Group Health Insurnace</p> */}
      </li>
      <li>
        <div><img src={require("./Assets/Retirement_ins_logo.png")} alt="" /></div>
        {/* <p>Retirement Plans</p> */}
      </li>
      
    </ul>
  </div>

  <div id="bike" class="iconsSize">
    <img src={require("./Assets/Bike_ins_logo.png")} alt="" />
  </div>

  <div id="heart" class="iconsSize">
  <img src={require("./Assets/heart.png")} alt="" />
  </div>

  <div id="investment" class="iconsSize">
  <img src={require('./Assets/Investment_ins_logo.png')} alt="" />
  </div>

  <div id="guaranteed" class="iconsSize">
  <img src={require("./Assets/Guaranteed.png")} alt="" />
  </div>
    </div>
  )
}
