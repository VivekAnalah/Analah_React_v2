import React from "react";
import "../App.css";

// --------- CSS Module Added ----------------
// import Raise_css from "../Styles/Raise.module.css"

function Raise() {
  const backgroundStyle = {
    background:
      "linear-gradient(2deg, rgb(237 244 251) 0%, rgba(247, 242, 242, 0.06) 59.9%)",
    paddingBottom: "50px",
  };
  return (
    <>
      <div style={backgroundStyle}>
        <div className="flex flex-col sm:flex-row gap-[6%]  pt-[50px] relative">
          <div className="sm:w-[36.6%] w-[70%] order-2 sm:order-1 flex flex-col  ml-[8.5%]  xl:pl-0 sm:ml-[9.5%] sm:mt-[0px] mt-[15px]">
            <div className="mt-[30px]">
              <h2 className="textHeader1">
                <span className="title-border-bottom ">Rais</span>e a Claim
              </h2>
              <h3 className="  font-[500] text-[#000000] text-[16px] mt-[27px]">
                Raise your claim request in only a few clicks.
              </h3>
              <h4 className="font-[400] text-[16px] text-[#595959] mt-[15px]">
                You may raise a claim request, even if you did not buy your
                policy with us.
              </h4>
              <div className="text-center sm:text-left  mt-[45px] ">
                <a href="#raiseform">
                  <button className=" text-[16px] divStyles" id="raise-button">
                    Raise Claim
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 order-1 sm:order-2 flex flex-col w-[70%]  sm:w-[50%]">
            <div className="">
              <div className="rounded-tr-[349px] ml-auto w-auto h-full max-w-[100%] sm:max-w-[100%] xl:max-w-[85%] ">
                <img
                  alt="insurance"
                  src={require("../Assets/Images/Raise_claim.png")}
                  className="mt-[30px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[30%] ">
          <img
            src={require("../Assets/Images/background_left.png")}
            alt="left"
          />
        </div>
        <div className="absolute bottom-[30%] right-[0px]">
          <img
            src={require("../Assets/Images/background_right.png")}
            alt="right"
          />
        </div>
      </div>
    </>
  );
}

export default Raise;
