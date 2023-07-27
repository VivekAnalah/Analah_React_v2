
import React, { useState } from "react";
import "../Styles/raiseClaimForm.css"
import axios from "axios";

function RaiseClaimForm() {
  const [isHovered, setIsHovered] = useState(false);
  const [insurance_type , setInsuranceType] = useState("");
  const [Claimant_name, setClaimantName] = useState("");
  const [policy_num, SetPolicyNum] = useState("");
  const [mob_num, SetMobNum] = useState("");
  const [claimant_email, SetClaimantEmail] = useState("");
  const [claimant_query, SetClaimantQuery] = useState("");
  const [Email_valid, setEmail_valid] = useState(true);
  const [Mob_valid, setMob_valid] = useState(true);
  const validMob = (e) =>{
   
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    let mobile_number = e.target.value
// if mobile_number
// is empty return false
if (mobile_number == null) {
    console.log("mob not valid")
    SetMobNum("")
    setMob_valid(false)
    return "false";
}

// Return true if the mobile_number
// matched the ReGex
if (regex.test(mobile_number) == true) {
  SetMobNum(e.target.value)
    setMob_valid(true)
    console.log("mob valid")
    return "true";
}
else {
    console.log("mob not valid")
    SetMobNum("")
    setMob_valid(false)
    return "false";
}
}
const validStyle = {
  borderRadius: "11px",
  border: "1px solid #E8E9EB",
  background: "#FFF"
}
const notValidStyle = {
  border : "1px solid red",
  borderRadius: "11px",
  
  background: "#FFF"
}
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const validEmail = (e) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(e.target.value.match(validRegex)){
        setEmail_valid(true)
        SetClaimantEmail(e.target.value)
        console.log("valid")
    }else{
        setEmail_valid(false)
console.log("not valid")
SetClaimantEmail("")
    }

}

const handleClaim = async (e) => {

  e.preventDefault();
  console.log(
    insurance_type,
    Claimant_name,
    policy_num,
    mob_num, 
    claimant_email,
    claimant_query,
    Email_valid,
    Mob_valid)
try{

  let res = await axios.post( "https://famous-teal-raven.cyclic.app/claim",
    {
      Insurance_Type: insurance_type,
      Claimant_Name : Claimant_name,
      Policy_Number : policy_num,
      Mobile_Number : mob_num,
         Claimant_Email : claimant_email,
         Claimant_Query : claimant_query,

    }
  );
  let data = res.data;
  if(data.Status === "Ok"){
    alert(data.msg)
    // window.location.href = "https://dashboard.analahinsurance.com/customer/login"
   


  }else{
    alert("Sorry!!  Getting Internal Error to Upload your request")


  }
 console.log(data)
}
catch(e){
console.log(e)
}

}
  // const divStyles = {
   
  //   background: isHovered
  //     ? "white"
  //     : "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
  //     boxShadow: isHovered ? "5px 10px" : "",
  //   color: isHovered ? "#2A44A9" : "#ffffff",
  //   borderRadius: 11,
  // };

  const divStyles = {
    background: isHovered
      ? "white"
      : "linear-gradient(176deg, #4582E4 0%, #6DBDF7 100%)",
    boxShadow: isHovered ? "5px 10px" : "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: isHovered ? "#4582E4" : "#ffffff",
    borderRadius: 11,
    width: "fit-content",
    paddingLeft: "25px",
    paddingRight: "25px",

    height: "35px",
   


  };

  const inputBorderStyle = {
    borderRadius: "11px",
border: "1px solid #E8E9EB",
background: "#FFF"
  }
  return (
    <>
      <div className="relative RaiseClaimFormContainer">
        <div className="absolute left-0 top-0 lg:block hidden">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            className="w-full "
            alt=""
          />
        </div>
        <div className=" mycontainer_form mx-auto">
          <div
            className="items-center flex flex-col justify-center mb-14 lg:mb-28 scroll-mt-[100px]"
            id="raiseform"
          >
            <div className="max-w-[600px] mt-6">
              <h1 className="text-[32px] font-600 text-[#000000] text-center mb-8">
                Please enter the following details for your to raise your claim
                request
              </h1>
              <h5 className="text-[20px] font-600 text-[#000000]  text-center ">
                <span className="text-[#4C8CE7] pb-2">
                <a href="https://dashboard.analahinsurance.com/customer/login" target="blank">Login</a>{" "}
                </span>{" "}
                here if you are an existing user.
              </h5>
            </div>
            <div className="flex raiseform-wrap w-[45%] mt-8 lg:mt-16 hover:shadow-blue-800 hover:shadow-md" style={{background:'#FFF'}}>
              <div className="w-[100%] flex flex-col  items-center justify-center">
                <div className="flex flex-wrap gap-3 lg:w-[100%] justify-between">

                    <div className="section over-hide ">
                      <div className="section over-hide ">
                        <div className="container-fluid pt-2">
                          <div className="row justify-content-center">
                            <div className="col-12" style={{borderBottom: "1px solid rgb(100 100 145 / 26%)"}}>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-2" onClick={() => setInsuranceType("Life")}  />
                              <label className="for-checkbox-tools" for="tool-2">
                                Life
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-3" onClick={() => setInsuranceType("Health")}/>
                              <label className="for-checkbox-tools" for="tool-3">
                                Health
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-4" onClick={() => setInsuranceType("Car")} />
                              <label className="for-checkbox-tools" for="tool-4">
                                Car
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-5" onClick={() => setInsuranceType("Bike")}/>
                              <label className="for-checkbox-tools" for="tool-5">
                                Bike
                              </label>
                            </div>
                          </div>
                        </div>	
                      </div>
                    </div>

                  
                </div>
                <div className="lg:w-[85%] mt-[50px]">
                  <input
                    type="text"
                    className="input-text mt-[0px]"
                    placeholder="Name of the Insurer"
                    onChange={(e) => {setClaimantName(e.target.value)}}
                    style={inputBorderStyle}
                  />
                  <input
                    type="text"
                    className="input-text mt-[18.5px]"
                    placeholder="Policy Number "
                    onChange={(e) => SetPolicyNum(e.target.value)}
                    style={inputBorderStyle}
                  />
                  <input
                    type="number"
                    className="input-text mt-[18.5px]"
                    placeholder="Mobile Number"
                    onChange={(e) => validMob(e)}
                    style={Mob_valid ? validStyle : notValidStyle}
                   
                  />
                  <input
                    type="text"
                    className="input-text mt-[18.5px]"
                    placeholder="Email ID"
                    onChange={(e) => validEmail(e)}
                    style={Email_valid ? validStyle : notValidStyle}
                    
                  />
                  <textarea className="input-text mt-[18.5px] h-[127.5px]" placeholder="Tell us what happened"  onChange={(e)=> SetClaimantQuery(e.target.value)} style={inputBorderStyle} ></textarea>

                  <div className="text-center">
                    <button
                      className=" mt-[56px] mb-[61px]"
                      style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleClaim(e)}
                    disabled={!Email_valid || !Mob_valid  || !mob_num || !claimant_email  }
                    >
                      Raise Claim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-7 bottom-[0] lg:block hidden ">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            className="w-full "
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default RaiseClaimForm;
