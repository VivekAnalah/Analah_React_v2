import React from "react";
import "../Styles/foundingTeam.css";

export const FoundingTeam = () => {
  const bg = {
    background: "linear-gradient(180deg, #F5F5F5 0%, #F6FAFE 100%)",
  };

  return (
    <div className="w-[100%] mt-[55px] bg-[#FFFFFF]">
      <div class="topic pb-[5px]">
        Founding <sapn class="topic2">Team</sapn>
      </div>

      <div
        className={`w-[70%] m-[auto] ${bg} grid grid-cols-[30%,70%] mt-[50px] foundingBg pr-[2%] relative h-[200px]`}
      >
        <div>
          <img
            src={require("../Assets/Images/Vaishali_Dhankani2.png")}
            alt="Vaishali Dhankani"
            className=" mt-[-35px] absolute left-[0px] bottom-[0px] foundingImagesWidth"
           
          />
        </div>
        <div className="mt-[35px]">
          <p className="textStyleFounding">
            Vaishali holds over two decades of expertise in the Finance, Banking
            and Insurance sector.
          </p>
          <p className="textStyleFounding mt-[15px]">
            She is the CEO of Analah Insurance and the founder of the Analah
            Group and oversees investment transactions worth more than USD 900
            million.
          </p>

          <div className="flex mt-[35px] gap-[20px] absolute bottom-[5px]">
            <h3 className="name">Vaishali Dhankani</h3>

            <p className="font-[18px] mt-[4px]">CEO</p>
          </div>
        </div>
      </div>

      <div
        className={`w-[70%] m-[auto] ${bg} grid grid-cols-[70%,30%] mt-[50px] foundingBg pl-[2%] relative h-[192px]`}
      >
        <div className="mt-[35px]">
          <p className="textStyleFounding">
            Hitesh is reckoned as a reputable, thoughtful & an action oriented
            leader with proven success in Asset Management, Fundraising,
            Distribution, Sales, Marketing, Research and Advisory across
            Financial Services, Insurance, Real Estate and Technology.
          </p>
          <p className="textStyleFounding mt-[15px]">
           
          </p>

          <div className="flex mt-[35px] gap-[20px] absolute bottom-[5px]">
            <h3 className="name">Hitesh Dhankani</h3>

            <p className="font-[18px] mt-[4px]">Co-Founder</p>
          </div>
        </div>

        <div>
          <img
            src={require("../Assets/Images/hitesh_dhankani4.png")}
            alt="Hitesh Dhankani"
            className="mt-[-35px] absolute bottom-[0px] right-[20px] foundingImagesWidth2"
            
          />
        </div>
      </div>
    </div>
  );
};
