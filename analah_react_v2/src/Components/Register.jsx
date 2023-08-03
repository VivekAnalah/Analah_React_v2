import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [isHovered, setIsHovered] = useState(false);
  const [Investment_User_Name, setInvestment] = useState("");
  const [Investment_User_Mail, setInvestmentMail] = useState("");
  const [Investment_User_Mob_Num, setInvestmentMobNum] = useState("");
  const [Investment_Checked, setInvestmentChecked] = useState("");
  const [Email_valid, setEmail_valid] = useState(true);
  const [Mob_valid, setMob_valid] = useState(true);
  const validEmail = (e) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.match(validRegex)) {
      setEmail_valid(true);
      setInvestmentMail(e.target.value);
      console.log("valid");
    } else {
      setEmail_valid(false);
      console.log("not valid");
      setInvestmentMail("");
    }
  };
  const validMob = (e) => {
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    let mobile_number = e.target.value;
    // if mobile_number
    // is empty return false
    if (mobile_number == null) {
      console.log("mob not valid");
      setInvestmentMobNum("");
      setMob_valid(false);
      return "false";
    }

    // Return true if the mobile_number
    // matched the ReGex
    if (regex.test(mobile_number) == true) {
      setInvestmentMobNum(e.target.value);
      setMob_valid(true);
      console.log("mob valid");
      return "true";
    } else {
      console.log("mob not valid");
      setInvestmentMobNum("");
      setMob_valid(false);
      return "false";
    }
  };
  const validStyle = {};
  const notValidStyle = {
    border: "1px solid red",
  };

  const handleInvestment = async (e) => {
    e.preventDefault();
    console.log(
      Investment_Checked,
      Investment_User_Mail,
      Investment_User_Mob_Num,
      Investment_User_Name
    );
    try {
      let res = await axios.post(
        "https://famous-teal-raven.cyclic.app/investment",
        {
          Investment_User_Name,
          Investment_User_Mail,
          Investment_User_Mob_Num,
        }
      );
      let data = res.data;
      if (data.Status === "Ok") {
        alert(data.msg);
        // window.location.href = "https://dashboard.analahinsurance.com/customer/login"
      } else {
        alert("Sorry!!  Getting Internal Error to Upload your request");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };




  return (
   

<div className='registerContainer'>
<div className='headingContainer'>
    <h3>
        Register Now!
    </h3>
</div>


<div className='mt-[20px]'>
    <div className="input-text">
    <label htmlFor="">
                            Full Name
                          </label>
    <input
                            type="text"
                            className='ml-[15px]'
                            placeholder="(Name as per PAN card)"
                            onChange={(e) => setInvestment(e.target.value)}
                          />
                        
    </div>
                         
                          <div className="sm:phoneInpt input-text">
                            <label htmlFor="">
                            Mobile No.
                            </label>
                            <input
                              type="number"
                              className='ml-[15px]'
                              placeholder=""
                              onChange={(e) => validMob(e)}
                              style={Mob_valid ? validStyle : notValidStyle}
                            />
                           
                          </div>

                          <div className="input-text">
                          <label htmlFor="">
                        Email ID
                      </label>

                          <input
                            type="email"
                            className='ml-[15px]'
                            placeholder=""
                            onChange={(e) => validEmail(e)}
                            style={Email_valid ? validStyle : notValidStyle}
                          />


                          </div>
                        
                   
                          

                          <div className="checkbox pt-4">
                            <div className="round">
                              <input
                                type="checkbox"
                                name=""
                                id="checkBox"
                                onClick={() =>
                                  setInvestmentChecked(!Investment_Checked)
                                }
                              />
                              <label htmlFor="checkBox"></label>
                            </div>
                           
                              <p className="text-[12px] font-400 text-[#595959]	px-5">
                                {" "}
                                I hereby agree to the{" "}
                                <Link
                                  to={"/privacy-policy"}
                                  className="text-[#4C8CE7] hover:font-extrabold"
                                >
                                  Privacy Policy,
                                </Link>
                                {" "}
                                <Link
                                  to={"/disclaimer"}
                                  className="text-[#4C8CE7] hover:font-extrabold"
                                >
                                  Disclaimer
                                </Link>{" "}
                                and
                                <Link
                                  to={"/term-condition"}
                                  className="text-[#4C8CE7] hover:font-extrabold"
                                >
                                {" "}  Terms & Conditions{" "}
                                </Link>
                                .
                              </p>
                           
                          </div>
                          <div className="text-center">
                            <button
                              className="divStyles"
                            
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              onClick={(e) => handleInvestment(e)}
                              disabled={
                                !Investment_Checked ||
                                !Email_valid ||
                                !Mob_valid ||
                                !Investment_User_Name ||
                                !Investment_User_Mail ||
                                !Investment_User_Mob_Num
                              }
                            >
                              Get Plan
                            </button>
                          </div>
                        </div>

    </div>

   
    
  )
}
