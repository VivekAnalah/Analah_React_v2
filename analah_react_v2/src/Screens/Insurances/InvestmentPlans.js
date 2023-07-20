import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function InvestmentPlans() {
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

  const divStyles = {
    // border : isHovered ? "0.5px solid #2A44A9" : "",
    background: isHovered
      ? "white"
      : "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
    boxShadow: isHovered ? "5px 10px" : "",
    color: isHovered ? "#2A44A9" : "#ffffff",
    borderRadius: 11,
  };

  return (
    <>
      <div className="pb-4">
        <Header raiseClaim={true} />
        <div
          id="insurance-scroll"
          className=" mycontainer1 mx-auto lg:pb-[200px] md:pb-[150px] sm:pb-[120px] pb-[120px] "
          style={{
            background:
              "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
          }}
        >
          <div className="flex flex-col sm:flex-row lg:gap-[12.2%] xl:gap-[15.2%] md:gap-[8%] gap-[5%] termLife relative items-center mt-[40px] pb-[20px]">
            <div className="lg:w-[45%] sm:w-[50%] w-[90%] order-2 sm:order-1 flex flex-col  pl-[8.5%] sm:pr-[0%] pr-[8.5%]">
              <div className=" ">
                <div className="flex items-center sm:mt-[0px] mt-[10px]">
                  <h2 className="text-[#000000] font-normal  text-[24px]  md:text-[30px] sm:text-[27px] xl:text-[32px] pb-[2%]">
                    <span className="title-border-bottom">Investment</span>{" "}
                    Plans
                  </h2>
                </div>
                <h3 className=" text-base lg:text-2xl sm:font-[500] text-[18px] pt-[4%] text-[#000] pb-[2%]">
                  {/* Compare from Top Performing Investment Plans */}
                </h3>
                <div className="order-1 lg:order-2 flex flex-col ">
                  <div className="items-center flex justify-center mt-5 lg:mt-0">
                    <div className="flex raiseform-wrap2 -mr-4 rounded-tl-[130px] p-5 lg:p-10 hover:shadow-blue-800 hover:shadow-md">
                      <div className="flex flex-col space-y-6 items-center justify-center mt-[0px]  m-[auto]">
                        <h2 className="text-[18px] sm:text-xl text-[#2A44A9] font-bold text-center">
                          Get the right plan Today !
                        </h2>

                        <div>
                          <input
                            type="text"
                            className="input-text"
                            placeholder="Full Name"
                            onChange={(e) => setInvestment(e.target.value)}
                          />
                          <div className="sm:phoneInpt">
                            <input
                              type="number"
                              className="input-text"
                              placeholder="Mobile No."
                              onChange={(e) => validMob(e)}
                              style={Mob_valid ? validStyle : notValidStyle}
                            />
                            {/* <span>Send OTP</span> */}
                          </div>
                          {/* <input
                        type="number"
                        className="input-text"
                        placeholder="Enter OTP"
                      /> */}

                          <input
                            type="email"
                            className="input-text"
                            placeholder="Email"
                            onChange={(e) => validEmail(e)}
                            style={Email_valid ? validStyle : notValidStyle}
                          />

                          {/* <input
                        type="text"
                        className="input-text"
                        placeholder="Enter PAN Card Number"
                      /> */}

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
                           
                              <p className="text-xs	px-5">
                                {" "}
                                I hereby agree to the{" "}
                                <Link
                                  to={"/privacy-policy"}
                                  className="text-[#2a44a9] hover:font-extrabold"
                                >
                                  Privacy Policy,
                                </Link>
                                {" "}
                                <Link
                                  to={"/disclaimer"}
                                  className="text-[#2a44a9] hover:font-extrabold"
                                >
                                  Disclaimer
                                </Link>{" "}
                                and
                                <Link
                                  to={"/term-condition"}
                                  className="text-[#2a44a9] hover:font-extrabold"
                                >
                                {" "}  Terms & Conditions{" "}
                                </Link>
                                .
                              </p>
                           
                          </div>
                          <div className="text-center">
                            <button
                              className="justify-center w-full sm:w-[210px] text-center items-center py-2 text-[#FFFFFF] px-10 text-[18px]"
                              style={divStyles}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:order-2 sm:block flex flex-col items-center xl:ml-[5%] lg:ml-[5%]">
              {/* ---------- Form -------------  */}
              <img
                src={require(`../../Assets/Images/Invest_ins.png`)}
                alt={"Investment"}
                className=" lg:w-[320px] md:w-[250px] sm:w-[250px] w-[60%]"
              />
            </div>
          </div>
        </div>
        {/* Get Quote Button */}
        {/* <div className="flex justify-center items-center relative xl:top-[-80px] lg:top-[-80px] md:top-[-80px] sm:top-[-60px] top-[-60px] ">
        <div className="text-center items-center   h-[20px] absolute top-[0%] ">
          <a href="" target="blank">
            <button
              className="justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px] "
              style={{
                background: "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
                borderRadius: 11,
              }}
            >
            
            </button>
          </a>
        </div>
      </div> */}
        <div className="relative top-[0px]">
          <div
            className="headingLine m-[auto] w-[100%]"
            style={{
              background:
                "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
            }}
          ></div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default InvestmentPlans;
