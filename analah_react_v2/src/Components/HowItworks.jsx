import { Grid } from "@mui/material";
import React from "react";
import "../Styles/howItWorks.css"

function Howitworks() {
  
  return (
    
    <div className="  mx-auto w-[100%] max-w-[100%]">
      <div className="lg:pt-[4rem] md:pt-[3rem] sm:pt-[2rem] pt-[2rem] pb-[5rem] relative" >
      <h2 className="text-[32px] text-700 mb-9 lg:mb-[60px] text-center" >
        <span className="text-[#4C8CE7] text-center mb-[35px]">How </span>
        it works ?
      </h2>

      <div className="absolute left-0 top-20 lg:block hidden ">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            className="w-full "
            alt=""
          />
        </div>

        <div className="absolute right-0 top-20 lg:block hidden ">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            className="w-full "
            alt=""
          />
        </div>

      <Grid container  style={{ width: "73%", margin: "auto"}}>
         
       
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center px-3 "} 
            >
              <div className="flex flex-col justify-center items-center w-[90%] howItworksChild relative" >
                <div className={"flex justify-start w-auto h-auto mb-10"}>
                  <img
                    src={require("../Assets/Images/Asset 3.png")}
                    alt=""
                    className="aspect-auto object-contain w-[67px] h-[67px]"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px] howItworksText">
                    Fill up our form and submit a request to raise a claim.
                  </h3>
                </div>
                <div className="howItworksNumbering absolute top-[5px] right-[16px]">
                1
              </div>
              </div>
            
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center px-3 "}
            >
              <div className="flex flex-col justify-center items-center w-[90%] howItworksChild relative">
                <div className={" flex justify-start w-auto h-auto mb-10"}>
                  <img
                    src={require("../Assets/Images/Asset 6.png")}
                    alt=""
                    className="aspect-auto object-contain w-[73px] h-[73px] m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px] howItworksText">
                    Submit the requisite documents as requested by our team.
                  </h3>
                </div>
                <div className="howItworksNumbering  absolute top-[5px] right-[16px]">
                2
              </div>
              </div>
              
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center px-3"}
            >
              <div className="flex flex-col justify-center items-center w-[90%] howItworksChild relative">
                <div className={" flex justify-start w-auto h-auto mb-10"}>
                  <img
                    src={require("../Assets/Images/Asset 1.png")}
                    alt=""
                    className="aspect-auto object-contain w-[69px] h-[69px] m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px] howItworksText">
                    Leave it to us to resolve and work for your claim
                    settlement.
                  </h3>
                </div>
                <div className="howItworksNumbering  absolute top-[5px] right-[16px]">
                3
              </div>
              </div>
              
            </Grid>
        
    
      </Grid>
    </div>
    </div>
  );
}

export default Howitworks;

