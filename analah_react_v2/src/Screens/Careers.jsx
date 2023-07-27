
import React from "react";
import Footer from "../Components/Footer";
import {Header} from "../Components/Header";
import "../Styles/careers.css"


import bref from "../Assets/Images/career.svg";

function Careers() {
  
  return (
    <>
      <div>
        <Header raiseClaim={true} />

        <div className="bred">
          {/* Title */}
          <h2 class="CareerHeader absolute left-[28%] top-[40%]">
            <span class=" title-border-bottom">Caree</span>rs
          </h2>
                 {/* ------------------------------------------------------------------------------------------ */}   
                  {/* Dotted Images */}
          <div>
          <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-[94px] h-[34px] absolute left-[19%] top-[26.56px]"
              alt=""
            />
          </div>
          <div>
          <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-[135px] h-[49px] absolute bottom-[23.27px] left-[43.45%]"
              alt=""
            />
          </div>
          <div>
          <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-[135px] h-[49px] absolute top-[57px] right-[22%]"
              alt=""
            />
          </div>
                 {/* ------------------------------------------------------------------------------------------ */}   
{/* Left SIde Image */}
          <div className="">
              <img
                src={require("../Assets/Images/background_left_1.png")}
                alt="left"
                className=" absolute top-[0px] left-[0px] w-[389.971px] h-[284.4px]"
                
              />
            </div>
            {/* -------------- */}

            {/* Right SIde Image */}
            <div className="">
              <img
                src={require("../Assets/Images/background_right_1.png")}
                alt="right"
                className="absolute  right-[0px] bottom-[0px] w-[389.971px] h-[284.4px]"
              />
            </div>
 {/* ------------------------------------------------------------------------------------*/}
  {/* Hiring Image*/}
            <div className="absolute top-[60px] right-[31.34%]">
            <img
                src={require("../Assets/Images/Hiring 1.png")}
                alt="hiring"
              />
            </div>
       {/* ------------------------------------------------------------------------------------------ */}   


        </div>

        <div className="w-[75%] m-auto" >
          <div className="flex flex-col lg:flex-row gap-3 pt-[90px] relative items-center pb-[100px]">
            <>
              <div className="lg:w-1/2 flex flex-col">
                <div className="">
                  <h2 className="growTogether">
                    <span className=" title-border-bottom CareerHeader">Let’s </span>
                    grow together
                  </h2>

                  <h4 className=" text-justify mt-[43px] growTogetherText">
                    InsurTech is disrupting the insurance domain in India. If
                    you're looking for a dynamic opportunity and want to be a
                    part of something that's truly transformative, then
                    InsurTech is the place for you. We're looking for people who
                    are ready to take their ideas and run with them. You'll have
                    the opportunity to work with some of the brightest minds in
                    the industry and build solutions that are changing the
                    insurance landscape.
                  </h4>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col">
                <div className="flex  gap-4 justify-center ">
                 <img src={require("../Assets/Images/Grow_Together.png")} alt="grow_together" className="mt-[60px]" />
                </div>
              </div>
{/* Dotted Image */}
              <div>
          <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-[135px] h-[49px] absolute top-[102px] right-[5%]"
              alt=""
            />
          </div>

          <div>
          <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-[135px] h-[49px] absolute bottom-[80px] right-[40%]"
              alt=""
            />
          </div>

          <div>
          <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-[135px] h-[49px] absolute bottom-[0px] left-[0%]"
              alt=""
            />
          </div>

                 {/* ------------------------------------------------------------------------------------------ */}   
            </>
          </div>


          {/* -----------------Get In Touch Section ----------------------------------- */}
          <div className="flex flex-col items-center justify-center mt-[46.52px] mb-[150px]">
            <h2 className="textHeader1Lite">
             <span className="textHeader1">Ge</span><span className="title-border-bottom "><span className="textHeader1">t</span>  in tou</span>ch{" "}
            </h2>

            <div className="w-[40%] mt-[70px] ml-[-75px]" >
              <img src={require("../Assets/Images/Career_Get_in_touch.png")} alt="Get in touch" className="w-[100%] "/>
            </div>

            <h5 className="CurrentOpenings text-center mt-[90px]">
              Current Openings
            </h5>
            <h5 className="CancelPolicyText text-center mt-[20px] w-[50%]">
              If you're ready to make a difference, come and join us. Send us
              your resume at{" "}
              <span className="text-[#4C8CE7]">
                <b><a href="mailto:contactus@analahinsurance.com" >contactus@analahinsurance.com</a></b>
              </span>
              .
            </h5>
            <div className="flex  flex-col items-center justify-center w-full mt-[50px]">
              <div className="text-center flex gap-5 items-center w-[100%] justify-center">
                <div className="divStyles SalesText flex justify-center items-center" style={{width: "25%", height:"54px"}}>
                  Sales Executive
                </div>

                <div className="divStyles SalesText flex justify-center items-center" style={{width: "25%", height:"54px"}}>
                  Sales Manager
                </div>
              </div>
              <div className="m-auto w-[70%]  mt-[40px]" >
                <h4 className="CurrentOpenings">
                  If you don't see a job opening which interests you, don't
                  worry!
                </h4>
                <p className="CancelPolicyText mt-[25px]">
                  We accept applications for future positions. Simply send us
                  your resume and we will get in touch if we have a suitable
                  opening for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Careers;
