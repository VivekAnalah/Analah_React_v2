import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../Styles/header.css";
import axios from "axios";
import "../Styles/register.css";

export const Header = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [registerOpen, setRegisterOpen] = useState(false);

  const divStyles = {
    boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)",

    marginRight: "0",
  };

  const textStyles =
    "text-[14px]  font-[400] hover:text-[#4C8CE7] text-[#808080]";

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
        "https://famous-teal-raven.cyclic.app/signup",
        {
          name:Investment_User_Name,
          email:Investment_User_Mail,
          mobile:Investment_User_Mob_Num,
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
    <>
      <nav
        style={divStyles}
        id={"scroll"}
        className=" flex flex-wrap items-center justify-between py-3 bg-white sticky  top-[0px] z-[12] "
      >
        <div className="w-[100%] mycontainer mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <Link to="/">
              {" "}
              <img
                src={require("../Assets/Images/logo.png")}
                alt="analah insurance"
                className={
                  "sm:object-contain sm:w-[185px] sm:pt-0  sm:ml-[30px] ml-[-20px] mt-[0px]  w-[230px]  justify-start"
                }
              />
            </Link>
            <div></div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img
                src={require("../Assets/Images/bar-icon.png")}
                alt="hamburger-icon"
                className="object-contain w-[25px] h-[25px]"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <h2
                    className={`${
                      location.pathname === "/" && "active"
                    } ${textStyles} `}
                  >
                    Insurance Products
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/raiseaclaim">
                  <h2
                    className={`${textStyles} ${
                      location.pathname === "/raiseaclaim" && "active"
                    }`}
                  >
                    Raise a Claim
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/become-posp">
                  {" "}
                  <h2
                    className={`${textStyles} ${
                      location.pathname === "/become-posp" && "active"
                    }`}
                  >
                    Become a PoSP with us
                  </h2>
                </Link>
              </li>
              <li className="nav-item w-[120px]">
                <div className={"mt-[4px] flex gap-[5px] "}>
                  <button className={"text-[#4c8ce7] text-[14px] font-600"}>
                    <a
                      href="https://dashboard.analahinsurance.com/customer/login"
                      target="blank"
                    >
                      Login
                    </a>
                  </button>

                  <button
                    className="w-[60%] text-[#FFF] text-[14px] font-600  "
                    style={{ borderRadius: "12.482px", background: "#4C8CE7" }}
                    onClick={() => setRegisterOpen(!registerOpen)}
                  >
                    Register
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={registerOpen ? "bgContainerRegister" : "hidden"}>
         
          <div className="registerContainer">
            <div className="headingContainer relative">
              <h3>
                Register Now!{" "}
                <img
                  src={require("../Assets/Images/close2.png")}
                  alt="close"
                  className="2xl:w-[30px] sm:w-[20px] w-[15px] absolute top-[20px] right-[25px] 2xl:top-[25px] 2xl:right-[25px] hover:cursor-pointer"
                  onClick={() => setRegisterOpen(!registerOpen)}
                />
              </h3>
            </div>

            <div className="mt-[20px]">
              <div className="input-text-register">
                <label htmlFor="" className="sm:text-[16px] text-[14px] ">Full Name</label>
                <input
                  type="text"
                  className="ml-[15px] sm:text-[16px] text-[14px] outline-none"
                  placeholder="(Name as per PAN card)"
                  onChange={(e) => setInvestment(e.target.value)}
                />
              </div>

              <div className="sm:phoneInpt input-text-register">
                <label htmlFor="" className="sm:text-[16px] text-[14px]">Mobile No.</label>
                <input
                  type="number"
                  className="ml-[15px] sm:text-[16px] text-[14px] outline-none appearance-none"
                  placeholder=""
                  onChange={(e) => validMob(e)}
                  style={Mob_valid ? validStyle : notValidStyle}
                />
              </div>

              <div className="input-text-register">
                <label htmlFor="" className="sm:text-[16px] text-[14px]">Email ID</label>

                <input
                  type="email"
                  className="ml-[15px] sm:text-[16px] text-[14px] outline-none"
                  placeholder=""
                  onChange={(e) => validEmail(e)}
                  style={Email_valid ? validStyle : notValidStyle}
                />
              </div>

              <div className=" checkbox pt-4 2xl:pt-8">
                <div className="round">
                  <input
                    type="checkbox"
                    name=""
                    id="checkBox"
                    onClick={() => setInvestmentChecked(!Investment_Checked)}
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
                  </Link>{" "}
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
                    {" "}
                    Terms & Conditions{" "}
                  </Link>
                  .
                </p>
              </div>
              <div className="text-center 2xl:mt-[80px]">
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
        </div>
      </nav>
    </>
  );
};
