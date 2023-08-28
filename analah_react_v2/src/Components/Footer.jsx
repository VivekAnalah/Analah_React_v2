import { Grid, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { display } from "../Context/DisplayContext";

export let sectionRef;
function Footer() {

  const location = useLocation();

  const {setInvestment, setGuaranteeModal} = useContext(display);

  const matches = useMediaQuery("(max-width:900px)");
  const [phoneImage, setPhoneImage] = useState("phone1");
  const [emailImage, setEmailImage] = useState("email1");
  const handleMouseEnterEmail = () =>{
   setEmailImage("email")

  }

  const handleMouseEnterPhone = () =>{
    setPhoneImage("phone")
  }

  const handleMouseLeavePhone = () =>{
    setPhoneImage("phone1")
  }

  const handleMouseLeaveEmail = () =>{
    setEmailImage("email1")
  }

  const pageScroll = (id) =>{

    if(id==="about"&& location.hash === "#about" || id==="about"&& location.pathname === "/"){

    
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
          


    }
  }

  return (
    <div className="">
      <Grid
        container
        spacing={2}
        className="px-[6%] py-10 mt-[10px] bg-gradient-to-b from-blue-500 to-blue-300 bg-gradient-to-r via-blue-500"
      >
        {matches ? (
          <>
            <div className="w-[100%] px-5">
              <div className="flex flex-row w-[100%] items-start space-x-2 justify-between">
                <div className="space-y-2 w-[50%]">
                  <h1 className="font-[600] text-[18px] text-white">
                    Get Insured
                  </h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Term-Life">Term Life Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Health">Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Family">Family Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Group">Group Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Car">Car Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/2-Wheeler">Two-Wheeler Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Travel"> Travel Insurance </Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Home">Home Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Retirement">Retirement Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5] hover:cursor-pointer" onClick={() => setInvestment()}>
                    Investment Plans
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5] hover:cursor-pointer" onClick={() => setGuaranteeModal()}>
                    Guaranteed Returns Plans
                  </h5>

                  <div className="bg-[#ffffff] w-[120px] h-auto flex flex-row rounded-[20px] p-2 space-x-2 items-center justify-center">
                    <a
                      href="https://twitter.com/analahinsurance"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Images/twitter2.png")}
                        alt="twitter"
                        className="object-contain w-[15px] h-[15px] grayscale hover:grayscale-0 "
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/analahinsurance/?igshid=ZDdkNTZiNTM%3D"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Images/Instagram1.png")}
                        alt="instagram"
                        className="object-contain w-[15px] h-[15px] grayscale hover:grayscale-0 "
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/analahinsurance"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Footer/facebook1.png")}
                        alt="facebook"
                        className="object-contain w-[15px] h-[15px] grayscale hover:grayscale-0 "
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/analahinsurance/"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Footer/linkedin1.png")}
                        alt="linkedin"
                        className="object-contain w-[15px] h-[15px] grayscale hover:grayscale-0 "
                      />
                    </a>

                    {/* <a  >
                   <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[15px] h-[15px]"
                    />
                   </a> */}
                  </div>
                </div>
                <div className="space-y-2 w-[50%]">
                  <h1 className="font-[600] text-[18px] text-white">
                    Quick Links
                  </h1>

                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/"}>Home</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white scroll-mt-[-20px] hover:text-[#9ad3f5]" onClick={()=>pageScroll("about")}>
                    <Link to={"/#about"}>About us </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/Raiseaclaim"}>Claim</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/policy-cancel"}>Policy Cancellation</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/become-posp"}>Become a PoSP</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/careers"}>Careers</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/disclaimer"}> Disclaimer </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/term-condition"}>Terms & Conditions </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-[100%] px-5 py-5">
              <div className="flex flex-row w-[100%] items-start space-x-2 justify-between">
                <div className="space-y-2 w-[50%]">
                  <h1 className="font-[600] text-[18px] text-white">Contact</h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white w-[100%%]">
                    <span className="font-[600]">
                      Registered & Corporate Office:{" "}
                    </span>
                    <br />
                    14th Floor B wing, 1407, Parinee Crescenzo, BKC, Mumbai,
                    Mumbai City, Maharashtra, 400051
                  </h5>
                  <br />

                  <h5 className="font-[600] text-[12px] sm:text-[16px] flex gap-2 text-white hover:text-[#9ad3f5]">
                    {/* <img src={require("../Assets/Images/phone.png")}  className="w-[16px] h-[16px]" alt="Phone"/> */}
                    <a href="tel:+91 99208 78181" className="flex gap-[6px] phoneImageAnchor" onMouseEnter={handleMouseEnterPhone} onMouseLeave={handleMouseLeavePhone}>
                      <img
                        src={require(`../Assets/Images/${phoneImage}.png`)}
                        alt="phone"
                        className="object-contain w-[15px] h-[15px] mt-[2px] phoneImage"
                      />

                      <span>+91 99208 78181</span>
                    </a>
                  </h5>
                  <h5 className="font-[600] text-[12px] sm:text-[16px] flex gap-2 text-justify text-white hover:text-[#9ad3f5]">
                    {/* <img src={require("../Assets/Images/mail.png")}  className="sm:w-[24px] sm:h-[24px] mt-[4px] ml-[-4px] " alt="mail"/> */}
                    <a
                      href="mailto:contactus@analahinsurance.com"
                      className="flex gap-[6px] mailImageAnchor"
                      onMouseEnter={handleMouseEnterEmail}
                      onMouseLeave={handleMouseLeaveEmail}
                    >
                      <img
                        src={require(`../Assets/Images/${emailImage}.png`)}
                        alt="email"
                        className="object-contain w-[15px] h-[15px] mt-[2px] mailImage"
                      />

                      <span> contactus@analahinsurance.com</span>
                    </a>

                    <br />
                  </h5>
                </div>

                <div className="space-y-2  w-[50%]">
                  <h5 className="font-[400] text-[12px] sm:text-[16px] text-white">
                    ANALAH INSURANCE BROKING PRIVATE LIMITED
                  </h5>
                  <h5 className="font-[400] text-[12px] sm:text-[16px] text-white">
                    IRDAI License No. 744 <br />
                    Direct Broker (Life & General) <br />
                    Valid upto: 10/06/2024 (Renewable)
                  </h5>
                  <br />
                  <h5 className="font-[400] text-[12px] sm:text-[16px] text-white">
                    CIN No. U66010MH2020PTC337611
                  </h5>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Grid item md={6} sm={6} lg={5}>
              <div className="flex flex-row  space-x-2 justify-around">
                <div className="space-y-5">
                  <h1 className="font-[600] text-[28px] text-white">
                    Get Insured
                  </h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Term-Life">Term Life Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Health">Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Family">Family Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Group">Group Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Car">Car Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/2-Wheeler">Two-Wheeler Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Travel"> Travel Insurance </Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Home">Home Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to="/Retirement">Retirement Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5] hover:cursor-pointer" onClick={() => setInvestment()}>
                   Investment Plans
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white hover:text-[#9ad3f5] hover:cursor-pointer" onClick={() => setGuaranteeModal()}>
                    Guaranteed Returns Plans
                  </h5>
                </div>
                <div className="space-y-5">
                  <h1 className="font-[600] text-[28px] text-white">Explore</h1>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/"}>Home</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white scroll-mt-[-20px] hover:text-[#9ad3f5]" onClick={()=>pageScroll("about")}>
                    <Link to={"/#about"}>About us </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/Raiseaclaim"}>Claim</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/policy-cancel"}>Policy Cancellation</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/become-posp"}>Become a PoSP</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/careers"}>Careers</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/disclaimer"}> Disclaimer </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white hover:text-[#9ad3f5]">
                    <Link to={"/term-condition"}>Terms & Conditions </Link>
                  </h5>
                </div>
              </div>
            </Grid>

            <Grid item md={6} sm={6} lg={7}>
              <div className="flex flex-row justify-evenly">
                <div className="space-y-5 w-[100%]">
                  <h1 className="font-[600] text-[28px] text-white">
                    Contact Us
                  </h1>
                  <h5 className="font-[300] text-[16px] text-white w-[75%]">
                    <span className="font-[600]">
                      {" "}
                      Registered & Corporate Office:{" "}
                    </span>
                    <br />
                    14th Floor B wing, 1407, Parinee Crescenzo, BKC, Mumbai,
                    Mumbai City, Maharashtra, 400051
                  </h5>
                  <br />

                  <h5 className="font-[600] text-[16px] text-white mt-[112px]">
                    {/* <img src={require("../Assets/Images/phone.png")} className="w-[32px] h-[32px]" alt="Phone"/> */}
                    <a
                      href="tel:+91 99208 78181"
                      className="flex gap-[6px] hover:text-[#9ad3f5] phoneImageAnchor"
                      onMouseEnter={handleMouseEnterPhone}
                      onMouseLeave={handleMouseLeavePhone}
                    >
                      <img
                        src={require(`../Assets/Images/${phoneImage}.png`)}
                        alt="phone"
                        className="object-contain w-[20px] h-[20px] mt-[2px] phoneImage"
                      />

                      <span>+91 99208 78181</span>
                    </a>
                    <br />
                    {/* <img src={require("../Assets/Images/mail.png")}  className="w-[32px] h-[32px]" alt="mail"/> */}
                    <a
                      href="mailto:contactus@analahinsurance.com"
                      className="flex gap-[6px] hover:text-[#9ad3f5] mailImageAnchor"
                      onMouseEnter={handleMouseEnterEmail}
                      onMouseLeave={handleMouseLeaveEmail}
                    >
                      <img
                        src={require(`../Assets/Images/${emailImage}.png`)}
                        alt="email"
                        className="object-contain w-[20px] h-[20px] mt-[2px] mailImage"
                      />

                      <span> contactus@analahinsurance.com</span>
                    </a>
                  </h5>

                  <div className="bg-[#ffffff] w-auto h-[100]"></div>
                </div>

                <div className="space-y-5 mt-16 w-[100%]">
                  <h5 className="font-[400] text-[16px] text-white">
                    ANALAH INSURANCE BROKING PRIVATE LIMITED
                  </h5>
                  <h5 className="font-[400] text-[16px] text-white">
                    IRDAI License No. 744 <br />
                    Direct Broker (Life & General) <br />
                    Valid upto: 10/06/2024 (Renewable)
                  </h5>
                  <br />
                  <h5 className="font-[400] text-[16px] text-white">
                    CIN No. U66010MH2020PTC337611
                  </h5>
                  <div className="">
                    <img
                      alt="values "
                      src={require("../Assets/Images/image 4.png")}
                      className={
                        matches
                          ? "hidden"
                          : "aspect-auto w-[450] h-auto p-[18px] bg-[#fff]"
                      }
                    />
                  </div>

                  <div className="bg_social w-[170px] h-[90] flex p-2 space-x-3 items-center justify-center bg-[#ffffff] bg-opacity-70 rounded-[20px]" style={{borderRadius: "32px",
border: "1px solid rgba(255, 255, 255, 0.30)",

}}>
                    <a
                      href="https://twitter.com/analahinsurance"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Images/twitter2.png")}
                        alt="twitter"
                        className="object-contain w-[25px] h-[25px] grayscale hover:grayscale-0 "
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/analahinsurance/?igshid=ZDdkNTZiNTM%3D"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Images/Instagram1.png")}
                        alt="instagram"
                        className="object-contain w-[25px] h-[25px] grayscale hover:grayscale-0 "
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/analahinsurance"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Footer/facebook1.png")}
                        alt="facebook"
                        className="object-contain w-[25px] h-[25px] grayscale hover:grayscale-0 "
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/analahinsurance/"
                      target="_blank"
                    >
                      <img
                        src={require("../Assets/Footer/linkedin1.png")}
                        alt="linkedin"
                        className="object-contain w-[25px] h-[25px] grayscale hover:grayscale-0 "
                      />
                    </a>
                    {/* <a  >
                    <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[25px] h-[25px]"
                    />
                    </a> */}
                    {/* <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[25px] h-[25px]"
                    /> */}
                  </div>
                </div>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default Footer;
